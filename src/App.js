import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

// Components
import Main from './main';
import AuthWrapper from './Components/Auth/AuthWrapper';
import LoginPage from './Components/Auth/Auth Page/LoginPage';
import Dashboard from './Components/Dashboard/Dashboard';
import GetUserDPProvider from './Context/UserProfileData/getUserProfileData';
import NotFoundPage from './Components/NotFoundPage/NotFoundPage';

function App() {

  return (
    <BrowserRouter>
      <GetUserDPProvider>
        <Routes>
          <Route index path='/' element={<Main />} />
          <Route path='/login' element={<LoginPage />} />
          <Route path='*' element={<NotFoundPage />} />


          {/* PROTECTED PATH */}
          <Route path='/dashboard' element={<AuthWrapper><Dashboard /></AuthWrapper>} />
          <Route path='/calendar' element={<AuthWrapper><Dashboard /></AuthWrapper>} />
          <Route path='/teams' element={<AuthWrapper><Dashboard /></AuthWrapper>} />
          <Route path='/analytics' element={<AuthWrapper><Dashboard /></AuthWrapper>} />
          <Route path='/messages' element={<AuthWrapper><Dashboard /></AuthWrapper>} />
        </Routes>
      </GetUserDPProvider>
    </BrowserRouter>
  );
}

export default App;
