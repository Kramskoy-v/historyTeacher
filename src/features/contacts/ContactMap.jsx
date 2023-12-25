import styled from 'styled-components';

const StyledMap = styled.div`
  width: 100%;
  height: 250px;
  overflow: hidden;
  border-radius: 5px;
`;

function ContactMap() {
  return (
    <StyledMap>
      <img src="map.png" alt="" />
    </StyledMap>
  );
}

export default ContactMap;
