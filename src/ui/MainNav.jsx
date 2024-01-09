import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const StyledMainNav = styled.nav`
  margin-bottom: 50px;
  ul {
    display: flex;
    flex-direction: column;
    row-gap: 17px;
    max-width: max-content;
  }
`;

const StyledNavLink = styled(NavLink)`
  display: block;
  max-width: max-content;
  padding-right: 32px;
  text-transform: uppercase;
  position: relative;
  font-size: 13px;
  transition: all 0.2s linear;
  line-height: 1.7;
  letter-spacing: 0.3em;

  &::after {
    content: '🠒';
    position: absolute;
    width: 20px;
    height: 20px;
    margin-left: 12px;
    font-size: 15px;
  }
  &:hover {
    transform: translateX(8px);
  }
  &.active {
    transform: translateX(12px);
  }
`;

const navLinks = [
  { name: 'Главная', to: 'home' },
  { name: 'Новости', to: 'news' },
  { name: 'Метод разработки', to: 'methodic' },
  { name: 'Вопросы и ответы', to: 'questions' },
  { name: 'Обо мне', to: 'aboutme' },
  { name: 'Контакты', to: 'contacts' },
];

function MainNav({ setShowSidebar }) {
  return (
    <StyledMainNav>
      <ul>
        {navLinks.map((link) => (
          <li key={link.to} onClick={() => setShowSidebar(false)}>
            <StyledNavLink to={link.to}>{link.name}</StyledNavLink>
          </li>
        ))}
      </ul>
    </StyledMainNav>
  );
}

export default MainNav;
