import { useForm } from 'react-hook-form';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import toast from 'react-hot-toast';

import { createNews } from '../../services/apiNews';
import FormRow from '../../ui/FormRow';
import Input from '../../ui/Input';
import InputFile from '../../ui/InputFile';
import Button from '../../ui/Button';
import Form from '../../ui/Form';
import Textarea from '../../ui/Textarea';
import Spinner from '../../ui/Spinner';

function FormNews() {
  const { register, handleSubmit, reset, formState } = useForm();

  const { errors } = formState;

  const queryClient = useQueryClient();

  const { mutate, isLoading } = useMutation({
    mutationFn: createNews,
    onSuccess: () => {
      toast.success('Запись успешно добавлена');
      queryClient.invalidateQueries({
        queryKey: ['news'],
      });
      reset();
    },
    onError: (err) => toast.error(err.message),
  });

  const onNewsSubmit = (data) => {
    mutate({ ...data, image: data.image[0] });
  };

  return (
    <>
      <h2>Добавить запись</h2>
      <Form onSubmit={handleSubmit(onNewsSubmit)}>
        <div>
          <FormRow label="Название" error={errors?.title?.message}>
            <Input
              type="text"
              id="title"
              {...register('title', {
                required: 'Поле обязательное к заполнению',
              })}
              disabled={isLoading}
            />
          </FormRow>

          <FormRow label="Полное описание" error={errors?.description?.message}>
            <Textarea
              id="description"
              {...register('description', {
                required: 'Поле обязательное к заполнению',
              })}
              disabled={isLoading}
            />
          </FormRow>

          <FormRow label="Дата публикации" error={errors?.date?.message}>
            <Input
              type="date"
              id="date"
              {...register('date', {
                required: 'Поле обязательное к заполнению',
              })}
              disabled={isLoading}
            />
          </FormRow>

          <FormRow label="Картинка" error={errors?.image?.message}>
            <InputFile
              accept="image/*"
              {...register('image', {
                required: 'Файл должен быть выбран',
              })}
              disabled={isLoading}
            />
          </FormRow>
        </div>
        <Button title="Добавить" disabled={isLoading} />
      </Form>
    </>
  );
}

export default FormNews;
