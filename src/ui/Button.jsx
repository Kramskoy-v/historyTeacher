import styled from 'styled-components';

const StyledButton = styled.button`
  width: min-content;
  background-color: var(--color-dark);
  border: 1px solid var(--color-dark-gray);
  font-size: 13px;
  padding: 7px 15px;
  color: var(--color-gray-white);
  text-transform: uppercase;
  &:hover {
    border-color: var(--color-light-red);
  }
  &:active {
    transform: scale(0.97);
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
