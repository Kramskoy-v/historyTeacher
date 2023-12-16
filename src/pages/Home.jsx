import styled from 'styled-components';

const StyledHomePage = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-end;
  height: 100%;
  padding: 0 40px 60px 40px;
`;

const Title = styled.h1`
  font-size: 70px;
  line-height: 1.2;
  text-align: right;
  font-weight: 700;
  margin-bottom: 50px;
  text-transform: uppercase;
`;

const Description = styled.p`
  font-size: 26px;
  line-height: 1.6em;
  text-align: right;
  font-weight: 400;
`;

function Home() {
  return (
    <StyledHomePage>
      <Title>
        Привет
        <br />Я учитель истории
      </Title>
      <Description>
        Что-то из разряда: здесь мои методические разработки, инфа обо мне и
        бла-бла-бла
      </Description>
    </StyledHomePage>
  );
}

export default Home;
