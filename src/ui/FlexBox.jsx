import styled from 'styled-components';

const StyledFlexBox = styled.div`
  display: flex;
  width: 100%;
  column-gap: 30px;
  @media screen and (max-width: 768px) {
    flex-direction: column;
    row-gap: 30px;
  }
`;

const Photo = styled.div`
  width: 285px;
  height: 285px;
  overflow: hidden;
  flex-shrink: 0;
  border-radius: 5px;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  @media screen and (max-width: 1200px) {
    width: 200px;
    height: 200px;
  }
`;

const ContentBox = styled.div`
  width: 100%;

  p {
    line-height: 1.75;
    color: var(--color-grey-white);
  }
  h2,
  h3 {
    margin-bottom: 40px;
    font-size: 24px;
    line-height: 1.2;
    font-weight: 600;
    text-transform: uppercase;
  }
  span {
    display: block;
    margin-top: 20px;
    text-align: right;
  }
`;

function FlexBox({ src, alt, children }) {
  return (
    <StyledFlexBox>
      <Photo>
        <img src={src} alt={alt} />
      </Photo>
      <ContentBox>{children}</ContentBox>
    </StyledFlexBox>
  );
}

export default FlexBox;
