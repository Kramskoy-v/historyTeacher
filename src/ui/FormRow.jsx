import styled from 'styled-components';

const StyledFormRow = styled.div`
  width: 100%;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 10px;
  color: var(--color-grey-white);
`;

const StyledError = styled.p`
  color: var(--color-red);
  font-size: 14px;
`;

function FormRow({ label, error, children }) {
  return (
    <StyledFormRow>
      {label && <Label htmlFor={children.props.id}>{label}</Label>}
      {children}
      {error && <StyledError>{error}</StyledError>}
    </StyledFormRow>
  );
}

export default FormRow;
