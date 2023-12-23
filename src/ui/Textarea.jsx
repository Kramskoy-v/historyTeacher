import styled from 'styled-components';

const Textarea = styled.textarea`
  width: 100%;
  height: 200px;
  padding: 8px;
  background-color: var(--color-dark);
  border: 1px solid var(--color-dark-grey);
  resize: none;

  &:focus-visible {
    border-color: var(--color-grey-white);
  }
  &::placeholder {
    font-size: 13px;
  }
`;

export default Textarea;
