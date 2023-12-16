import styled from 'styled-components';

const StyledFlexRow = styled.div`
  display: flex;
  justify-content: space-between;
`;

function FlexRow({ children }) {
  return <StyledFlexRow>{children}</StyledFlexRow>;
}

export default FlexRow;
