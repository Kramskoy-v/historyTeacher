import styled from 'styled-components';

const StyledSocialLinks = styled.ul`
  display: flex;
  column-gap: 10px;
  margin-bottom: 20px;
`;

const SocialItem = styled.li`
  position: relative;
  width: 22px;
  height: 22px;
  filter: grayscale(1);
  transition: all 0.3s;
  a {
    display: block;
    width: 100%;
    height: 100%;
  }

  span {
    display: none;
    position: absolute;
    top: -32px;
    z-index: 2;
    width: max-content;
    padding: 3px 5px;
    border-radius: 5px;
    font-size: 10px;
    background-color: var(--color-red);
  }

  &:hover {
    filter: grayscale(0);
    span {
      display: block;
    }
  }
`;

const links = [
  {
    id: '1',
    title: 'Вконтакте',
    link: 'https://vk.com/ivan24645041',
    icon: 'vk_icon.png',
  },
  {
    id: '2',
    title: 'Управление образования и молодежной политики',
    link: 'https://edu-vrn.ru/',
    icon: 'dep_icon.png',
  },
  {
    id: '3',
    title: 'Минпросвещения России',
    link: 'https://edu.gov.ru/',
    icon: 'pros_icon.png',
  },
  {
    id: '4',
    title: 'Банк документов',
    link: 'https://docs.edu.gov.ru/',
    icon: 'bank-docs_icon.png',
  },
  {
    id: '5',
    title: 'ЕГЭ',
    link: 'https://fipi.ru/ege',
    icon: 'ege_icon.png',
  },
];

function SocialLinks() {
  return (
    <StyledSocialLinks>
      {links.map((item) => (
        <SocialItem key={item.id}>
          <a href={item.link} target="_blank" rel="noopener noreferrer">
            <img src={item.icon} alt={item.title} />
          </a>
          <span>{item.title}</span>
        </SocialItem>
      ))}
    </StyledSocialLinks>
  );
}

export default SocialLinks;
