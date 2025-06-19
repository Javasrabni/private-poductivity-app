import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

// Components
import Main from './main';
import AuthWrapper from './Components/Auth/AuthWrapper';
import LoginPage from './Components/Auth/Auth Page/LoginPage';
import Dashboard from './Components/Dashboard/Dashboard';
import NotFoundPage from './Components/NotFoundPage/NotFoundPage';
// Context
import GetUserDPProvider from './Context/UserProfileData/getUserProfileData';
import GetAllUserDataProvider from './Context/GetAllUserData/getAllUserData';
import GetUserConnectionsProvider from './Context/GetUserConnections/GetUserConnectionsContext';
import GetNotifProvider from './Context/GetAllUserNotifications/GetNotifContext';

function App() {
  return (
    <BrowserRouter>
      <GetUserDPProvider>
        <GetUserConnectionsProvider>
          <GetAllUserDataProvider>
            <GetNotifProvider>
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
            </GetNotifProvider>
          </GetAllUserDataProvider>
        </GetUserConnectionsProvider>
      </GetUserDPProvider>
    </BrowserRouter >
  );
}

export default App;
