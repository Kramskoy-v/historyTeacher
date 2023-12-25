import styled from 'styled-components';

const Input = styled.input`
  position: relative;
  width: 100%;
  height: max-content;
  padding: 5px 8px;
  background-color: var(--color-dark);
  border: 1px solid var(--color-dark-grey);
  &:focus-visible {
    border-color: var(--color-grey-white);
  }
  &::placeholder {
    font-size: 13px;
  }
  &:disabled {
    background-color: var(--color-grey-white);
  }
  &::-webkit-calendar-picker-indicator {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    color: transparent;
    background: transparent;
  }
`;

export default Input;
