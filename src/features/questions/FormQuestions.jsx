import { useForm } from 'react-hook-form';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import toast from 'react-hot-toast';

import Button from '../../ui/Button';
import Form from '../../ui/Form';
import FormRow from '../../ui/FormRow';
import Input from '../../ui/Input';
import Textarea from '../../ui/Textarea';
import { createQuestion } from '../../services/apiQuestions';

function FormQuestions() {
  const queryClient = useQueryClient();

  const { mutate, isLoading } = useMutation({
    mutationFn: createQuestion,
    onSuccess: () => {
      toast.success('Запись успешно добавлена');
      queryClient.invalidateQueries({
        queryKey: ['questions'],
      });
      reset();
    },
    onError: (err) => toast.error(err.message),
  });

  const { register, handleSubmit, reset, formState } = useForm();

  const { errors } = formState;

  const onQuestionSubmit = (data) => {
    mutate(data);
  };

  return (
    <>
      <h2>Добавить запись</h2>
      <Form onSubmit={handleSubmit(onQuestionSubmit)}>
        <div>
          <FormRow label="Вопрос" error={errors?.titleQuestion?.message}>
            <Input
              type="text"
              disabled={isLoading}
              id="titleQuestion"
              {...register('titleQuestion', {
                required: 'Поле обязательное к заполнению',
              })}
            />
          </FormRow>
          <FormRow label="Ответ" error={errors?.responseQuestion?.message}>
            <Textarea
              disabled={isLoading}
              id="responseQuestion"
              {...register('responseQuestion', {
                required: 'Поле обязательное к заполнению',
              })}
            />
          </FormRow>
        </div>
        <Button title="Добавить" disabled={isLoading} />
      </Form>
    </>
  );
}

export default FormQuestions;
