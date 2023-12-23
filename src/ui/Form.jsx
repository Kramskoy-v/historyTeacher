import styled from 'styled-components';

const Form = styled.form`
  display: grid;
  grid-template-columns: 1fr 150px;
  gap: 20px 50px;
  padding: 15px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.4);
  background-color: ${(props) =>
    props.type === 'login' ? 'var(--color-dark-grey)' : 'transparent'};

  > div {
    display: flex;
    flex-direction: column;
    row-gap: 20px;
  }

  button {
    align-self: flex-end;
    margin-left: auto;
  }
`;

export default Form;
