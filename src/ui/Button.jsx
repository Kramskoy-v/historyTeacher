import styled from 'styled-components';

const StyledButton = styled.button`
  width: ${(prop) => (prop.more ? '100%' : 'max-content')};
  height: max-content;
  background-color: var(--color-dark);
  border: 1px solid var(--color-dark-grey);
  font-size: 13px;
  padding: 7px 15px;
  color: var(--color-grey-white);
  text-transform: uppercase;
  transition: all 0.3s;
  border-radius: 5px;

  &:hover {
    border-color: var(--color-red);
  }
  &:active {
    background-color: var(--color-dark-grey);
  }
  &:disabled {
    background-color: var(--color-grey);
    &:hover {
      border-color: transparent;
    }
  }
`;

function Button({ onClick, title, disabled, more }) {
  return (
    <StyledButton onClick={onClick} disabled={disabled} more={more}>
      {title}
    </StyledButton>
  );
}

export default Button;
