import styled from 'styled-components';

const StyledButton = styled.button`
  width: max-content;
  height: max-content;
  background-color: var(--color-dark);
  border: 1px solid var(--color-dark-grey);
  font-size: 13px;
  padding: 7px 15px;
  color: var(--color-grey-white);
  text-transform: uppercase;
  transition: all 0.3s;

  &:hover {
    border-color: var(--color-red);
  }
`;

function Button({ onClick, title, disabled }) {
  return (
    <StyledButton onClick={onClick} disabled={disabled}>
      {title}
    </StyledButton>
  );
}

export default Button;
