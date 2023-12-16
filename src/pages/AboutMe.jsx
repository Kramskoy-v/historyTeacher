import styled from 'styled-components';

import SectionTitle from '../ui/SectionTitle';
import FlexRow from '../ui/FlexRow';

const StyledAboutMe = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 25px;
`;

const PhotoMe = styled.div`
  width: 285px;
  height: 285px;
  margin-right: 30px;
  overflow: hidden;
  flex-shrink: 0;
`;

const Description = styled.div`
  h2 {
    margin-bottom: 40px;
    font-size: 24px;
    line-height: 1.2;
    font-weight: 600;
    text-transform: uppercase;
  }
  p {
    line-height: 1.75;
    color: var(--color-gray-white);
  }
`;

const Experience = styled.ul`
  list-style-type: '⚡';
  padding-left: 17px;

  li {
    color: var(--color-gray-white);
    padding-left: 10px;
    &:not(:last-child) {
      margin-bottom: 10px;
    }
  }
`;

function AboutMe() {
  return (
    <StyledAboutMe>
      <SectionTitle content="Обо мне" />
      <FlexRow>
        <PhotoMe>
          <img src="about-me.jpg" alt="Иван Неретин" />
        </PhotoMe>
        <Description>
          <h2>Я люблю то чем занимаюсь</h2>
          <p>
            Далеко-далеко, за словесными горами в стране гласных и согласных
            живут рыбные тексты. Букв продолжил своего океана вопрос
            необходимыми что, это, строчка то рекламных коварный речью! Пустился
            на берегу грамматики живет встретил взобравшись переписывается.
          </p>
        </Description>
      </FlexRow>
      <Experience>
        <li>
          201x гимназия №1 Далеко-далеко, за словесными горами в стране гласных
          и согласных живут рыбные тексты.
        </li>
        <li>
          Еще шо-то там Далеко-далеко, за словесными горами в стране гласных и
          согласных живут рыбные тексты.
        </li>
        <li>
          Шо-то там Далеко-далеко, за словесными горами в стране гласных и
          согласных живут рыбные тексты.
        </li>
        <li>
          2012 закончил пед Далеко-далеко, за словесными горами в стране гласных
          и согласных живут рыбные тексты.
        </li>
        <li>
          2006 поступил в пед Далеко-далеко, за словесными горами в стране
          гласных и согласных живут рыбные тексты.2006 поступил в пед
          Далеко-далеко, за словесными горами в стране гласных и согласных живут
          рыбные тексты.
        </li>
      </Experience>
    </StyledAboutMe>
  );
}

export default AboutMe;
