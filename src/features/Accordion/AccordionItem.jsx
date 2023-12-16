import styled from 'styled-components';

const StyledAccordionItem = styled.li`
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
    font-size: 22px;
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
  color: ${(props) =>
    props.isopen === 'true' ? 'var(--color-light-red)' : 'var(--color-white)'};
`;

const ContentBox = styled.p`
  grid-column: 2 / -1;
  padding-bottom: 16px;
  line-height: 1.6;
  font-size: 18px;
`;

const AccordionItem = ({ num, title, text, curOpen, onOpen }) => {
  const isOpen = num === curOpen;

  const handleToggle = () => {
    onOpen(isOpen ? null : num);
  };

  return (
    <StyledAccordionItem isopen={isOpen.toString()} onClick={handleToggle}>
      <StyledNumber isopen={isOpen.toString()}>
        {num < 9 ? `0${num + 1}` : num + 1}
      </StyledNumber>
      <h3>{title}</h3>
      <span>{isOpen ? '-' : '+'}</span>
      {isOpen && <ContentBox>{text}</ContentBox>}
    </StyledAccordionItem>
  );
};

export default AccordionItem;
