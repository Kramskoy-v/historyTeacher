import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const StyledMainNav = styled.nav`
  margin-bottom: 50px;
  ul {
    display: flex;
    flex-direction: column;
    row-gap: 17px;
  }
`;

const StyledNavLink = styled(NavLink)`
  display: block;
  text-transform: uppercase;
  position: relative;
  font-size: 13px;
  transition: all 0.2s linear;
  max-width: max-content;
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
    transform: translateX(10px);
  }
`;

function MainNav() {
  return (
    <StyledMainNav>
      <ul>
        <li>
          <StyledNavLink to="home">Главная</StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="info">Объявления</StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="methodological">Разработки</StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="questions">Вопросы и ответы</StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="aboutme">Обо мне</StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="contacts">Контакты</StyledNavLink>
        </li>
      </ul>
    </StyledMainNav>
  );
}

export default MainNav;
