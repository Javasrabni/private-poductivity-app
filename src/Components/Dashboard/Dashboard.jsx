import { useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
// Context
import { useGetUserDP } from '../../Context/UserProfileData/getUserProfileData';
import { useGetAllUserData } from '../../Context/GetAllUserData/getAllUserData';
// Components
import SidebarDashboard from '../Sidebar/SidebarDashboard';
import Navbar from '../Navbar/Navbar';
import OverviewDashboard from './Contents/OverviewPage/OverviewDashboard';
import ChatPage from './Contents/MessagePage/ChatPage';
// Socket
import { socket } from './Contents/MessagePage/socket';

const Dashboard = () => {
  const location = useLocation();
  const activeContent = location.pathname;

  // Get user info
  const { username, email, user_id, user_status } = useGetUserDP();
  const GetAllUserData = useGetAllUserData()

  // Socket.io


  // Register to socket server once
  const [userStatus, setUserStatus] = useState({
    user: null,
    user_status: false
  })

  useEffect(() => {
    if (user_id) {
      socket.emit('user_status', { user_id });

      socket.on("user_status", ({ user_id, user_status }) => {
        setUserStatus({
          user: user_id,
          user_status: user_status
        })
      });

      return () => {
        socket.off("user_status");
      };
    }
  }, [])



  useEffect(() => {
    if (username) {
      socket.emit("register", username);

      console.log("✅ Registered from Dashboard:", username);

      socket.on("private_message", (data) => {
        console.log("📩 Received at dashboard:", data);
        // Future: handle notifikasi global
      });

      return () => {
        socket.off("private_message");
      };
    }
  }, [username])

  // Default targetUser hanya untuk test
  const targetUser = username === 'Javas Rabni' ? "Jarcode Dev" : "Javas Rabni";

  const ContentToShow = [
    { path: '/dashboard', contentComponent: <OverviewDashboard /> },
    { path: '/messages', contentComponent: <ChatPage username={username} targetUser={targetUser} /> }
  ];

  const ContentSectionStyle = {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: 'var(--baseColor)', // typo fixed: `backgoundColor` -> `backgroundColor`
    width: '100%',
    height: '100%',
  };

  const ContentContainer = {
    width: '100%',
    height: '100%',
  };

  const ContentSectionContainer = {
    padding: '50px',
    width: '100%',
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    overflowY: 'auto',
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <Navbar />
      <div style={ContentSectionStyle}>
        <SidebarDashboard />
        <div style={ContentSectionContainer}>
          {ContentToShow.map((item, index) =>
            activeContent === item.path ? (
              <div key={index} style={ContentContainer}>
                {item.contentComponent}
              </div>
            ) : null
          )}

          <div>
            {/* <p>{user_status ? 'atif' : 'offline'}</p>
            <p>{username} sedang {userStatus.user_status ? 'aktif' : 'offline'}</p> */}

            {GetAllUserData.map((item, idx) => (
              <div key={idx}>
                <p>{item.username}</p>
                <p>{item.email}</p>
                <p>{userStatus ? 'aktif' : 'offline'}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
