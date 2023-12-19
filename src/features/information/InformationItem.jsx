import styled from 'styled-components';
import FlexBox from '../../ui/FlexBox';

const StyledInformationItem = styled.li``;
function InformationItem({ image, title, description, date }) {
  return (
    <StyledInformationItem>
      <FlexBox src={image} alt={title}>
        <h2>{title}</h2>
        <p>{description}</p>
        <span>{date}</span>
      </FlexBox>
    </StyledInformationItem>
  );
}

export default InformationItem;
