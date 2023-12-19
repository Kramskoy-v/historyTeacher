import styled from 'styled-components';

const StyledContactTitle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  h2 {
    font-weight: 600;
    font-size: 20px;
    text-transform: uppercase;
    flex-shrink: 0;
    margin-right: 15px;
  }
  span {
    display: inline-block;
    width: 100%;
    height: 1px;
    background-color: var(--color-white);
  }
`;

function ContactTitle({ title }) {
  return (
    <StyledContactTitle>
      <h2>{title}</h2>
      <span></span>
    </StyledContactTitle>
  );
}

export default ContactTitle;
