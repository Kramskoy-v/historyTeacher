import styled from 'styled-components';

const Input = styled.input.attrs({ type: 'file' })`
  width: 100%;
  height: max-content;
  padding: 5px 8px;
  background-color: var(--color-dark);
  border: 1px solid var(--color-dark-grey);

  &::file-selector-button {
    font: inherit;
    font-weight: 500;
    font-size: 10px;
    padding: 5px 10px;
    margin-right: 20px;
    border: 1px solid var(--color-grey);
    background-color: var(--color-dark-grey);
    color: var(--color-grey-white);
    text-transform: uppercase;
    cursor: pointer;
    transition: all 0.3s;

    &:hover {
      border-color: var(--color-red);
    }
  }
`;

export default Input;
