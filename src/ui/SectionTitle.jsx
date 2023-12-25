import styled from 'styled-components';

const StyledSectionTitle = styled.h1`
  font-size: 48px;
  font-weight: 500;
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
  @media screen and (max-width: 1200px) {
    font-size: 36px;
  }
`;

function SectionTitle({ content }) {
  return <StyledSectionTitle>{content}</StyledSectionTitle>;
}

export default SectionTitle;
