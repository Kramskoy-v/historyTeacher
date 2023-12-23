import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { HashRouter, Navigate, Route, Routes } from 'react-router-dom';

import GlobalStyles from './styles/GlobalStyles';
import NotFound from './pages/NotFound';
import Login from './pages/Login';
import AppLayout from './ui/AppLayout';
import Home from './pages/Home';
import News from './pages/News';
import Methodic from './pages/Methodic';
import MethodicSingle from './pages/MethodicSingle';
import Questions from './pages/Questions';
import Contacts from './pages/Contacts';
import AboutMe from './pages/AboutMe';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { Toaster } from 'react-hot-toast';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 0,
    },
  },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <GlobalStyles />
      <HashRouter>
        <Routes>
          <Route element={<AppLayout />}>
            <Route index element={<Navigate replace to="home" />} />
            <Route path="home" element={<Home />} />
            <Route path="news" element={<News />} />
            <Route path="methodic" element={<Methodic />} />
            <Route path="methodic/:id" element={<MethodicSingle />} />
            <Route path="questions" element={<Questions />} />
            <Route path="aboutme" element={<AboutMe />} />
            <Route path="contacts" element={<Contacts />} />
          </Route>

          <Route path="login" element={<Login />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </HashRouter>
      <Toaster
        position="top-right"
        gutter={12}
        containerStyle={{ margin: '8px' }}
        toastOptions={{
          success: {
            duration: 3000,
          },
          error: {
            duration: 5000,
          },
          style: {
            fontSize: '16px',
            maxWidth: '500px',
            padding: '16px 24px',
            backgroundColor: 'var(--color-grey-white)',
            color: 'var(--color-dark)',
            border: '2px solid var(--color-red)',
          },
        }}
      />
    </QueryClientProvider>
  );
}

export default App;
