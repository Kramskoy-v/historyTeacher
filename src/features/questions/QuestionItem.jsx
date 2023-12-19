import styled from 'styled-components';

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
    props.isopen === 'true' ? 'var(--color-light-red)' : 'var(--color-gray)'};
  border-bottom: 1px solid var(--color-gray);
  cursor: pointer;

  h3 {
    font-size: 20px;
    font-weight: 500;
  }

  span {
    font-size: 26px;
  }
`;

const StyledNumber = styled.p`
  font-size: 30px;
  font-weight: 500;
  align-self: flex-start;
`;

const ContentBox = styled.p`
  grid-column: 2 / -1;
  padding-bottom: 16px;
  line-height: 1.8;
  font-size: 16px;
`;

const QuestionItem = ({ num, title, text, curOpen, onOpen }) => {
  const isOpen = num === curOpen;

  const handleToggle = () => {
    onOpen(isOpen ? null : num);
  };

  return (
    <StyledQuestionItem isopen={isOpen.toString()} onClick={handleToggle}>
      <StyledNumber>{num < 9 ? `0${num + 1}` : num + 1}</StyledNumber>
      <h3>{title}</h3>
      <span>{isOpen ? '-' : '+'}</span>
      {isOpen && <ContentBox>{text}</ContentBox>}
    </StyledQuestionItem>
  );
};
export default QuestionItem;
