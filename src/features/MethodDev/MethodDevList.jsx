import styled from 'styled-components';
import MethodDevItem from './MethodDevItem';

const methodDevData = [
  {
    id: 'q4',
    title: 'Методика один',
    description:
      'Далеко-далеко за словесными, горами в стране гласных и согласных живут рыбные тексты. Города вопрос семь оксмокс большого прямо? Пустился великий послушавшись сих власти буквоград ты она свой. Ему залетают всеми повстречался вершину!',
    link: 'https://nihuyandexdisk',
    icon: 'method_dev_icon_1.png',
  },
  {
    id: 'q41',
    title: 'Методика два',
    description:
      'Далеко-далеко за словесными, горами в стране гласных и согласных живут рыбные тексты. Города вопрос семь оксмокс большого прямо? Пустился великий послушавшись сих власти буквоград ты она свой. Ему залетают всеми повстречался вершину!',
    link: 'https://nihuyandexdisk',
    icon: 'method_dev_icon.png',
  },
  {
    id: 'q42',
    title: 'Методика три',
    description:
      'Далеко-далеко за словесными, горами в стране гласных и согласных живут рыбные тексты. Города вопрос семь оксмокс большого прямо? Пустился великий послушавшись сих власти буквоград ты она свой. Ему залетают всеми повстречался вершину!',
    link: 'https://nihuyandexdisk',
    icon: 'method_dev_icon.png',
  },
  {
    id: '1q4',
    title: 'Методика четыре',
    description:
      'Далеко-далеко за словесными, горами в стране гласных и согласных живут рыбные тексты. Города вопрос семь оксмокс большого прямо? Пустился великий послушавшись сих власти буквоград ты она свой. Ему залетают всеми повстречался вершину!',
    link: 'https://nihuyandexdisk',
    icon: 'method_dev_icon.png',
  },
  {
    id: 'q4554',
    title: 'Методика пять',
    description:
      'Далеко-далеко за словесными, горами в стране гласных и согласных живут рыбные тексты. Города вопрос семь оксмокс большого прямо? Пустился великий послушавшись сих власти буквоград ты она свой. Ему залетают всеми повстречался вершину!',
    link: 'https://nihuyandexdisk',
    icon: 'method_dev_icon_1.png',
  },
  {
    id: '89q4',
    title: 'Методика шесть',
    description:
      'Далеко-далеко за словесными, горами в стране гласных и согласных живут рыбные тексты. Города вопрос семь оксмокс большого прямо? Пустился великий послушавшись сих власти буквоград ты она свой. Ему залетают всеми повстречался вершину!',
    link: 'https://nihuyandexdisk',
    icon: 'method_dev_icon_1.png',
  },
];

const StyledMethodDevList = styled.ul`
  display: flex;
  flex-direction: column;
  row-gap: 35px;
`;

function MethodDevList() {
  return (
    <StyledMethodDevList>
      {methodDevData.map((method) => (
        <MethodDevItem key={method.id} {...method} />
      ))}
    </StyledMethodDevList>
  );
}

export default MethodDevList;
