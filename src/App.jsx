import {
  BrowserRouter,
  HashRouter,
  Navigate,
  Route,
  Routes,
} from 'react-router-dom';
import GlobalStyles from './styles/GlobalStyles';
import NotFound from './pages/NotFound';
import Login from './pages/Login';
import AppLayout from './ui/AppLayout';
import Home from './pages/Home';
import Information from './pages/Information';
import MethodDevList from './pages/MethodDev';
import MethodDevSingle from './pages/MethodDevSingle';
import Questions from './pages/Questions';
import Contacts from './pages/Contacts';
import AboutMe from './pages/AboutMe';

function App() {
  return (
    <>
      <GlobalStyles />
      <HashRouter>
        <Routes>
          <Route element={<AppLayout />}>
            <Route index element={<Navigate replace to="home" />} />
            <Route path="home" element={<Home />} />
            <Route path="info" element={<Information />} />
            <Route path="methodological" element={<MethodDevList />} />
            <Route path="methodological/:id" element={<MethodDevSingle />} />
            <Route path="questions" element={<Questions />} />
            <Route path="aboutme" element={<AboutMe />} />
            <Route path="contacts" element={<Contacts />} />
          </Route>

          <Route path="login" element={<Login />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </HashRouter>
    </>
  );
}

export default App;
