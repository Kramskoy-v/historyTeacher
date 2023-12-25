import styled from 'styled-components';
import MainNav from './MainNav';
import SocialLinks from './SocialLinks';
import Button from './Button';
import { useUser } from './../features/authentication/useUser';
import { useLogout } from '../features/authentication/useLogout';

const StyledSidebar = styled.aside`
  height: max-content;
  grid-row: 1 / -1;
  display: flex;
  flex-direction: column;
  padding: 30px;
  background: rgba(34, 34, 34, 0.85);
  flex-shrink: 0;
  border-radius: 5px;

  @media screen and (max-width: 992px) {
    position: fixed;
    top: 0;
    left: 0;
    width: 100dvw;
    height: 100dvh;
    z-index: 8;
    transition: all 0.3s;
    background: rgba(34, 34, 34, 0.9);
    transform: ${(prop) =>
      prop.showsidebar === 'true' ? 'translateX(0)' : 'translateX(-300%)'};
  }
`;

function Sidebar({ showSidebar, setShowSidebar }) {
  const { isAuthenticated } = useUser();
  const { logout } = useLogout();

  return (
    <StyledSidebar showsidebar={showSidebar.toString()}>
      <MainNav setShowSidebar={setShowSidebar} />
      <SocialLinks />
      {isAuthenticated && <Button title="выйти из системы" onClick={logout} />}
    </StyledSidebar>
  );
}

export default Sidebar;
