import styled from 'styled-components';
import MainNav from './MainNav';

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
  return (
    <StyledSidebar>
      <MainNav />
    </StyledSidebar>
  );
}

export default Sidebar;