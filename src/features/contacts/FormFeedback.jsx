import styled from 'styled-components';
import { useForm } from 'react-hook-form';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import toast from 'react-hot-toast';

import Form from '../../ui/Form';
import FormRow from '../../ui/FormRow';
import Input from '../../ui/Input';
import Textarea from '../../ui/Textarea';
import Button from '../../ui/Button';
import { createFeedback } from '../../services/apiFeedback';

const StyledFormFeedback = styled(Form)`
  width: 100%;
  display: flex;
  flex-direction: column;
  row-gap: 25px;
  border: none;
`;

function FormFeedback() {
  const queryClient = useQueryClient();

  const { mutate, isLoading } = useMutation({
    mutationFn: createFeedback,
    onSuccess: () => {
      toast.success('Сообщение успешно отправлено');
      queryClient.invalidateQueries({
        queryKey: ['feedback'],
      });
      reset();
    },
    onError: (err) => toast.error(err.message),
  });

  const { register, handleSubmit, reset, formState } = useForm();

  const { errors, isValid } = formState;

  const onQuestionSubmit = (data) => {
    mutate(data);
  };

  return (
    <StyledFormFeedback onSubmit={handleSubmit(onQuestionSubmit)}>
      <div>
        <FormRow error={errors?.name?.message}>
          <Input
            type="text"
            disabled={isLoading}
            id="name"
            placeholder="имя"
            {...register('name', {
              required: 'Поле обязательное к заполнению',
            })}
          />
        </FormRow>
        <FormRow error={errors?.email?.message}>
          <Input
            type="email"
            disabled={isLoading}
            id="email"
            placeholder="e-mail"
            {...register('email', {
              required: 'Поле обязательное к заполнению',
            })}
          />
        </FormRow>
        <FormRow error={errors?.phone?.message}>
          <Input
            type="tel"
            disabled={isLoading}
            id="phone"
            placeholder="номер телефона"
            pattern="[0-9]{10,20}"
            {...register('phone', {
              required: 'Поле обязательное к заполнению',
              minLength: {
                value: 10,
                message: 'Введен неверный формат номера',
              },
            })}
          />
        </FormRow>
        <FormRow error={errors?.message?.message}>
          <Textarea
            disabled={isLoading}
            id="message"
            placeholder="сообщение"
            {...register('message', {
              required: 'Поле обязательное к заполнению',
            })}
          />
        </FormRow>
      </div>
      <Button title="отправить" disabled={isLoading || !isValid} />
    </StyledFormFeedback>
  );
}

export default FormFeedback;
