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
    id: 'd45',
    title: 'Вконтакте',
    link: 'https://vk.com/ivan24645041',
    icon: 'vk_icon.png',
  },
  {
    id: 'd5',
    title: 'Департамент образования',
    link: 'https://google.com',
    icon: 'dep_icon.png',
  },
  {
    id: 'd4',
    title: 'Бургер',
    link: 'https://www.youtube.com',
    icon: 'burger_icon.png',
  },
  {
    id: 'qd45',
    title: 'Веселый череп',
    link: 'https://vk.com/ivan24645041',
    icon: 'skull_icon.png',
  },
  {
    id: 'de45',
    title: 'Бургер кинг',
    link: 'https://vk.com/ivan24645041',
    icon: 'burger_icon.png',
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
