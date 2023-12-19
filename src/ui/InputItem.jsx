import { styled } from 'styled-components';
const StyledInputItem = styled.div`
  width: 100%;
  input,
  textarea {
    width: 100%;
    padding: 8px;
    background-color: var(--color-dark);
    border: 1px solid var(--color-dark-gray);
    &:focus-visible {
      border-color: var(--color-gray-white);
    }
    &::placeholder {
      font-size: 13px;
    }
  }
  input {
    height: 36px;
  }
  textarea {
    height: 200px;
    resize: none;
  }
`;

function InputItem({ type, placeholder, id, name, label }) {
  return (
    <StyledInputItem>
      {label && <label htmlFor={id}>{label}</label>}
      {type === 'textarea' ? (
        <textarea id={id} placeholder={placeholder} name={name}></textarea>
      ) : (
        <input id={id} type={type} placeholder={placeholder} name={name} />
      )}
      <p></p>
    </StyledInputItem>
  );
}

export default InputItem;
