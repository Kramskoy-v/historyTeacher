import SectionTitle from '../ui/SectionTitle';
import ButtonLink from '../ui/ButtonLink';
import styled from 'styled-components';

const MethodDescription = styled.p`
  line-height: 1.75;
  color: var(--color-gray-white);
`;

const Download = styled.a`
  display: block;
  width: max-content;
  margin-left: auto;
  padding: 7px 15px;
  background-color: var(--color-dark);
  border: 1px solid var(--color-dark-gray);
  font-size: 13px;
  color: var(--color-gray-white);
  text-transform: uppercase;
  &:hover {
    border-color: var(--color-light-red);
  }
  &:active {
    transform: scale(0.97);
  }
`;

function MethodDevSingle() {
  return (
    <>
      <SectionTitle content="Разработка 1" />
      <MethodDescription>
        Далеко-далеко за словесными, горами в стране гласных и согласных живут
        рыбные тексты. Города вопрос семь оксмокс большого прямо? Пустился
        великий послушавшись сих власти буквоград ты она свой. Ему залетают
        всеми повстречался вершину!' 'Далеко-далеко за словесными, горами в
        стране гласных и согласных живут рыбные тексты. Города вопрос семь
        оксмокс большого прямо? Пустился великий послушавшись сих власти
        буквоград ты она свой. Ему залетают всеми повстречался вершину!'
        'Далеко-далеко за словесными, горами в стране гласных и согласных живут
        рыбные тексты. Города вопрос семь оксмокс большого прямо? Пустился
        великий послушавшись сих власти буквоград ты она свой. Ему залетают
        всеми повстречался вершину!'
      </MethodDescription>
      <Download
        href="https://disk.yandex.ru/d/eEtqPC4vEAFlaw"
        target="_blank"
        rel="noopener noreferrer"
      >
        Перейти и скачать
      </Download>
      <ButtonLink back="back" />
    </>
  );
}

export default MethodDevSingle;
