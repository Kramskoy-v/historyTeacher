import { Outlet, useLocation } from 'react-router-dom';
import styled from 'styled-components';

import Header from './Header';
import Sidebar from './Sidebar';
import PrivacyPopup from './PrivacyPopup';
import { useLocalStorageState } from '../hooks/useLocalStorageState';
import ButtonIcon from './ButtonIcon';
import { useState } from 'react';

const StyledAppLayout = styled.div`
  max-width: 1920px;
  height: 100dvh;
  margin: 0 auto;
  padding: 15px 10px;
  display: grid;
  grid-template-columns: 250px 1fr;
  grid-template-rows: auto 1fr;
  @media screen and (max-width: 992px) {
    grid-template-columns: 1fr;
  }
`;

const Main = styled.main`
  overflow-y: auto;

  &::-webkit-scrollbar {
    border-radius: 10px;
    width: 10px;
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    background-color: var(--color-grey-white);
    @media screen and (max-width: 992px) {
      width: 0;
    }
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
  border-radius: 5px;
  @media screen and (max-width: 1200px) {
    margin-left: 10px;
  }
  @media screen and (max-width: 992px) {
    margin-left: 0;
    padding: 40px 15px;
  }
`;

function AppLayout() {
  const { pathname } = useLocation();
  const [value, setValue] = useLocalStorageState(true, 'showPrivacyPopup');
  const [showSidebar, setShowSidebar] = useState(false);

  return (
    <StyledAppLayout>
      <ButtonIcon
        showSidebar={showSidebar}
        onClick={() => setShowSidebar((show) => !show)}
        variant="burger"
      />
      <Header />
      <Sidebar showSidebar={showSidebar} setShowSidebar={setShowSidebar} />
      <Main>
        {pathname == '/home' ? (
          <Outlet />
        ) : (
          <Container>
            <Outlet />
          </Container>
        )}
      </Main>
      {value && <PrivacyPopup setShowPrivacyPopup={setValue} />}
    </StyledAppLayout>
  );
}

export default AppLayout;
