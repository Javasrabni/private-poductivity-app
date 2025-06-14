import { useLocation } from 'react-router-dom'
// User data
import { useGetUserDP } from '../../Context/UserProfileData/getUserProfileData'
// Components
import SidebarDashboard from '../Sidebar/SidebarDashboard'
import Navbar from '../Navbar/Navbar'
import OverviewDashboard from './Contents/OverviewPage/OverviewDashboard'

const Dashboard = () => {
  const location = useLocation()
  const activeContent = location.pathname

  // Content container style
  const ContentSectionStyle = {
    // position: 'absolute',
    // top: '56px',
    // left: '256px',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgoundColor: 'var(--baseColor)',
    width: '100%',
    height: '100%',
  }
  // Style
  const ContentContainer = {
    width: '100%',
    height: '100%'
  }
  // Content section container
  const ContentSectionContainer = {
    padding: '50px',
    width: '100%',
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    overflowY: 'auto'
  }

  // Content datas
  const ContentToShow = [
    { path: '/dashboard', contentComponent: <OverviewDashboard /> }
  ]

  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <Navbar />
      {/* Dashboard content */}
      <div style={{ ...ContentSectionStyle }}>
        <SidebarDashboard />
        {/* Content section */}
        <div style={{ ...ContentSectionContainer }}>
          {/* Active content */}
          {ContentToShow.map((item, index) => activeContent === item.path && (
            <div key={index} style={{ ...ContentContainer }}>
              {item.contentComponent}
            </div>
          ))}

        </div>
      </div>
    </div>
  )
}

export default Dashboard
