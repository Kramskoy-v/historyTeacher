import styled from 'styled-components';
import InformationItem from './InformationItem';

const informationData = [
  {
    id: 'a45',
    image: 'info_1.jpg',
    title: 'Класссная новость',
    description:
      'Далеко-далеко за словесными горами в стране гласных и согласных живут рыбные тексты. От всех, страна? Алфавит, встретил до то рот обеспечивает страну решила, грустный гор, родного снова дорогу своих пустился рукопись вскоре они!',
    date: '12 декабря 2012',
  },
  {
    id: 's45',
    image: 'info_2.jpg',
    title: 'Класссная новость 2',
    description:
      'Далеко-далеко за словесными горами в стране гласных и согласных живут рыбные тексты. От всех, страна? Алфавит, встретил до то рот обеспечивает страну решила, грустный гор, родного снова дорогу своих пустился рукопись вскоре они!',
    date: '12 декабря 2012',
  },
  {
    id: 'aq5',
    image: 'info_3.jpg',
    title: 'Класссная новость 3',
    description:
      'Далеко-далеко за словесными горами в стране гласных и согласных живут рыбные тексты. От всех, страна? Алфавит, встретил до то рот обеспечивает страну решила, грустный гор, родного снова дорогу своих пустился рукопись вскоре они!',
    date: '12 декабря 2012',
  },
  {
    id: 'fd5',
    image: 'info_4.jpg',
    title: 'Класссная новость 42',
    description:
      'Далеко-далеко за словесными горами в стране гласных и согласных живут рыбные тексты. От всех, страна? Алфавит, встретил до то рот обеспечивает страну решила, грустный гор, родного снова дорогу своих пустился рукопись вскоре они!',
    date: '12 декабря 2012',
  },
];

const StyledInformationList = styled.ul`
  display: flex;
  flex-direction: column;
  row-gap: 30px;
`;

function InformationList() {
  return (
    <StyledInformationList>
      {informationData.map((item) => (
        <InformationItem key={item.id} {...item} />
      ))}
    </StyledInformationList>
  );
}

export default InformationList;
