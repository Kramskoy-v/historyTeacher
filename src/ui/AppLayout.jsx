import { Outlet, useLocation } from 'react-router-dom';
import styled from 'styled-components';

import Header from './Header';
import Sidebar from './Sidebar';

const StyledAppLayout = styled.div`
  max-width: 1920px;
  height: 100vh;
  margin: 0 auto;
  padding: 15px 10px;
  display: grid;
  grid-template-columns: 250px 1fr;
  grid-template-rows: auto 1fr;
`;

const Main = styled.main`
  overflow-y: auto;

  &::-webkit-scrollbar {
    border-radius: 10px;
    width: 10px;
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    background-color: var(--color-grey-white);
  }
  &::-webkit-scrollbar-thumb {
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    border-radius: 10px;
    background-color: #585858;
  }
`;

const Container = styled.div`
  max-width: 990px;
  margin: 0 auto 0 10%;
  padding: 40px 35px;
  display: flex;
  flex-direction: column;
  row-gap: 30px;
  background-color: var(--color-dark);
`;

function AppLayout() {
  const { pathname } = useLocation();

  return (
    <StyledAppLayout>
      <Header />
      <Sidebar />
      <Main>
        {pathname == '/home' ? (
          <Outlet />
        ) : (
          <Container>
            <Outlet />
          </Container>
        )}
      </Main>
    </StyledAppLayout>
  );
}

export default AppLayout;
