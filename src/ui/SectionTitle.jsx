import styled from 'styled-components';

const StyledSectionTitle = styled.h1`
  font-size: 48px;
  font-weight: 400;
  line-height: 1.2em;
  margin-bottom: 25px;
  text-transform: uppercase;
  margin: 0;
  margin-bottom: 50px;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    bottom: -20px;
    left: 0;
    width: 50px;
    height: 2px;
    background-color: var(--color-dark-grey);
  }
`;

function SectionTitle({ content }) {
  return <StyledSectionTitle>{content}</StyledSectionTitle>;
}

export default SectionTitle;
