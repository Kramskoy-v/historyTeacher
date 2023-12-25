import styled from 'styled-components';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import toast from 'react-hot-toast';

import ButtonLink from '../../ui/ButtonLink';
import ButtonIcon from '../../ui/ButtonIcon';
import { deleteMethod } from '../../services/apiMethodic';
import Spinner from '../../ui/Spinner';
import { useUser } from '../authentication/useUser';

const StyledMethodicItem = styled.li`
  display: grid;
  grid-template-columns: 70px 1fr;
  padding: 15px 20px;
  box-shadow: 0 0 30px rgba(0, 0, 0, 0.4);
  gap: 35px;
  border: 1px solid var(--color-grey);
  position: relative;
  border-radius: 5px;
  h2 {
    margin-bottom: 10px;
  }
`;

const Description = styled.p`
  margin-bottom: 13px;
  height: 24px;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
`;

function MethodicItem({ method }) {
  const { id, title, description, image } = method;
  const { isAuthenticated } = useUser();

  const queryClient = useQueryClient();

  const { isLoading, mutate } = useMutation({
    mutationFn: deleteMethod,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['methodic'],
      });
      toast.success('Запись успешно удалена');
    },
    onError: (err) => toast.error(err.message),
  });

  if (isLoading) return <Spinner />;
  return (
    <StyledMethodicItem>
      <img src={image} alt="иконка методики" />
      <div>
        <h2>{title}</h2>
        <Description>{description}</Description>
        <ButtonLink mla="mla" to={`/methodic/${id}`}>
          Подробнее
        </ButtonLink>
      </div>
      {isAuthenticated && (
        <ButtonIcon type="delete" onClick={() => mutate(id)} />
      )}
    </StyledMethodicItem>
  );
}

export default MethodicItem;
