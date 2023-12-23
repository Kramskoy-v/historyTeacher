import { useForm } from 'react-hook-form';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import toast from 'react-hot-toast';

import { createMethod } from '../../services/apiMethodic';
import FormRow from '../../ui/FormRow';
import Input from '../../ui/Input';
import InputFile from '../../ui/InputFile';
import Button from '../../ui/Button';
import Form from '../../ui/Form';
import Textarea from '../../ui/Textarea';

function FormMethodic() {
  const { register, handleSubmit, reset, formState } = useForm();

  const { errors } = formState;

  const queryClient = useQueryClient();

  const { mutate, isLoading } = useMutation({
    mutationFn: createMethod,
    onSuccess: () => {
      toast.success('Запись успешно добавлена');
      queryClient.invalidateQueries({
        queryKey: ['methodic'],
      });
      reset();
    },
    onError: (err) => toast.error(err.message),
  });

  const onMethodSubmit = (data) => {
    mutate({ ...data, image: data.image[0] });
  };

  return (
    <>
      <h2>Добавить запись</h2>
      <Form onSubmit={handleSubmit(onMethodSubmit)}>
        <div>
          <FormRow label="Название" error={errors?.title?.message}>
            <Input
              type="text"
              id="title"
              {...register('title', {
                required: 'Поле обязательное к заполнению',
              })}
            />
          </FormRow>

          <FormRow label="Полное описание" error={errors?.description?.message}>
            <Textarea
              id="description"
              {...register('description', {
                required: 'Поле обязательное к заполнению',
              })}
            />
          </FormRow>

          <FormRow
            label="Ссылка для скачивания"
            error={errors?.downloadLink?.message}
          >
            <Input
              type="text"
              id="downloadLink"
              {...register('downloadLink', {
                required: 'Поле обязательное к заполнению',
              })}
            />
          </FormRow>
          <FormRow label="Иконка" error={errors?.image?.message}>
            <InputFile
              accept="image/*"
              {...register('image', {
                required: 'Файл должен быть выбран',
              })}
            />
          </FormRow>
        </div>
        <Button title="Добавить" disabled={isLoading} />
      </Form>
    </>
  );
}

export default FormMethodic;
