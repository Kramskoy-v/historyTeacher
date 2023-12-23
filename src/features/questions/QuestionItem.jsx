import styled from 'styled-components';
import ButtonIcon from '../../ui/ButtonIcon';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { deleteQuestion } from '../../services/apiQuestions';
import Spinner from '../../ui/Spinner';
import toast from 'react-hot-toast';
import { useUser } from '../authentication/useUser';

const StyledQuestionItem = styled.li`
  display: grid;
  grid-template-columns: auto 1fr auto;
  column-gap: 24px;
  row-gap: 32px;
  align-items: center;
  padding: 20px 48px 20px 24px;
  box-shadow: 0 0 30px rgba(0, 0, 0, 0.4);
  border-top: 1px solid transparent;
  border-top-color: ${(props) =>
    props.isopen === 'true' ? 'var(--color-red)' : 'var(--color-grey)'};
  border-bottom: 1px solid var(--color-grey);
  cursor: pointer;
  position: relative;
  h3 {
    font-size: 20px;
    font-weight: 500;
  }
`;

const Image = styled.img`
  width: 35px;
  height: 35px;
  align-self: flex-start;
`;

const ContentBox = styled.p`
  grid-column: 2 / -1;
  padding-bottom: 16px;
  line-height: 1.8;
  font-size: 16px;
`;

const Icon = styled.span`
  font-size: 30px;
`;

const QuestionItem = ({
  id,
  num,
  titleQuestion,
  responseQuestion,
  curOpen,
  onOpen,
}) => {
  const isOpen = num === curOpen;

  const { isAuthenticated } = useUser();

  const handleToggle = () => {
    onOpen(isOpen ? null : num);
  };

  const queryClient = useQueryClient();

  const { isLoading, mutate } = useMutation({
    mutationFn: deleteQuestion,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['questions'],
      });
      toast.success('Запись успешно удалена');
    },
    onError: (err) => toast.error(err.message),
  });

  if (isLoading) return <Spinner />;

  return (
    <StyledQuestionItem isopen={isOpen.toString()} onClick={handleToggle}>
      <Image src="question_icon.png" alt="questionZ" />
      <h3>{titleQuestion}</h3>
      <Icon>{isOpen ? '-' : '+'}</Icon>
      {isOpen && <ContentBox>{responseQuestion}</ContentBox>}
      {isAuthenticated && (
        <ButtonIcon
          disabled={isLoading}
          type="delete"
          onClick={() => mutate(id)}
        />
      )}
    </StyledQuestionItem>
  );
};
export default QuestionItem;
