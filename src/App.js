import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

// Web Component
import Main from './main';
import AuthWrapper from './Components/Auth/AuthWrapper';
import LoginPage from './Components/Auth/Auth Page/LoginPage';
import Dashboard from './Components/Dashboard/Dashboard';
import GetUserDPProvider from './Context/UserProfileData/getUserProfileData';

function App() {
  return (
    <BrowserRouter>
      <GetUserDPProvider>
        <Routes>
          <Route index path='/' element={<Main />} />
          <Route index path='/login' element={<LoginPage />} />

          {/* PROTECTED PATH */}
          <Route index path='/dashboard' element={<AuthWrapper><Dashboard /></AuthWrapper>} />
        </Routes>
      </GetUserDPProvider>
    </BrowserRouter>
  );
}

export default App;
