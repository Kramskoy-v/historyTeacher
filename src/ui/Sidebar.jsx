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
`;

function Sidebar() {
  const { isAuthenticated } = useUser();
  const { logout } = useLogout();

  return (
    <StyledSidebar>
      <MainNav />
      <SocialLinks />
      {isAuthenticated && <Button title="выйти из системы" onClick={logout} />}
    </StyledSidebar>
  );
}

export default Sidebar;
