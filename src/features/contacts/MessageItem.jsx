import styled from 'styled-components';
import ButtonIcon from '../../ui/ButtonIcon';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { deleteFeedback } from '../../services/apiFeedback';
import toast from 'react-hot-toast';

function MessageItem({ id, name, email, phone, message, created_at }) {
  const StyledMessageItem = styled.li`
    display: flex;
    flex-direction: column;
    row-gap: 8px;
    margin-bottom: 15px;
    padding: 20px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.4);
    position: relative;
  `;

  const date = new Date(`${created_at}`).toLocaleDateString('ru-RU', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  const queryClient = useQueryClient();

  const { isLoading, mutate } = useMutation({
    mutationFn: deleteFeedback,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['feedback'],
      });
      toast.success('Сообщение успешно удалено');
    },
    onError: (err) => toast.error(err.message),
  });

  return (
    <StyledMessageItem>
      <p>От: {name}</p>
      <p>E-mail: {email}</p>
      <p>Номер телефона: {phone}</p>
      <div>
        <p>Сообщение:</p>
        <p>{message}</p>
      </div>
      <p>Дата отправки: {date}</p>
      <ButtonIcon
        type="delete"
        onClick={() => mutate(id)}
        disabled={isLoading}
      />
    </StyledMessageItem>
  );
}

export default MessageItem;
