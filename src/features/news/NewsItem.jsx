import styled from 'styled-components';
import FlexBox from '../../ui/FlexBox';
import ButtonIcon from '../../ui/ButtonIcon';
import { deleteNews } from '../../services/apiNews';
import Spinner from '../../ui/Spinner';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import { useUser } from './../authentication/useUser';

const StyledNewsItem = styled.li`
  position: relative;
  padding: 20px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.4);
  border-radius: 5px;
  h2 {
    padding-right: 30px;
  }
`;
const ItemDate = styled.span``;
function NewsItem({ id, image, title, description, date }) {
  const { isAuthenticated } = useUser();
  const formattedDate = new Date(`${date}`).toLocaleDateString('ru-RU', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  const queryClient = useQueryClient();

  const { isLoading, mutate } = useMutation({
    mutationFn: deleteNews,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['news'],
      });
      toast.success('Запись успешно удалена');
    },
    onError: (err) => toast.error(err.message),
  });

  if (isLoading) return <Spinner />;

  return (
    <StyledNewsItem>
      <FlexBox src={image} alt={title}>
        <h2>{title}</h2>
        <p>{description}</p>
        <ItemDate>{formattedDate}</ItemDate>
      </FlexBox>
      {isAuthenticated && (
        <ButtonIcon type="delete" onClick={() => mutate(id)} />
      )}
    </StyledNewsItem>
  );
}

export default NewsItem;
