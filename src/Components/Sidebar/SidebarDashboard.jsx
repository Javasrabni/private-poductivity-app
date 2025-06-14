import React, { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
// import { ReactComponent as HomeIcon } from '../../Assets/Icons/home.svg'

const SidebarDashboard = () => {
    const navigate = useNavigate()
    const location = useLocation()
    const activeButton = location.pathname

    // Button style
    const SidebarStyle = {
        display: 'flex',
        maxWidth: "255px",
        width: "100%",
        height: "100vh",
        backgroundColor: "var(--baseColor)",
        boxShadow: "0 1px 0px 0px #171a1f12, 0 0px 4px -1px #171a1f1F",

        padding: "24px 8px"
    }
    const ButtonStyle = {
        display: "flex",
        alignItems: "center",
        backgroundColor: "var(--baseColor)",
        justifyContent: "start",
        height: "40px",
        color: "var(--baseColorBlack)",
        width: '100%',
        borderRadius: "6px",
        outline: "none",
        border: "none",
        cursor: "pointer",
        fontSize: '14px',
        lineHeight: '20px',
        fontWeight: '500',
        padding: '12px'
    }
    const PassiveButton = {
        backgroundColor: "var(--baseColor)",
        color: "var(--second-base-font-color)"
    }
    const ActiveButton = {
        backgroundColor: "var(--blue-accent)",
        color: "var(--baseColor)"
    }

    const HomeIcon = <svg className="w-6 h-6" width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14 21V13H10V21C10 21.5523 9.55228 22 9 22C8.44772 22 8 21.5523 8 21V13C8 12.4696 8.21087 11.961 8.58594 11.5859C8.96101 11.2109 9.46957 11 10 11H14C14.5304 11 15.039 11.2109 15.4141 11.5859C15.7891 11.961 16 12.4696 16 13V21C16 21.5523 15.5523 22 15 22C14.4477 22 14 21.5523 14 21Z" fill={activeButton === '/dashboard' ? '#fff' : 'var(--second-base-font-color)'} style={{ fillOpacity: 1 }} /><path d="M20 9.99957L19.9941 9.89117C19.9824 9.78322 19.9531 9.67762 19.9072 9.57867C19.846 9.44674 19.7566 9.32979 19.6455 9.2359L19.6406 9.23102L12.6455 3.2359V3.23688C12.4875 3.10334 12.2926 3.02251 12.0879 3.00446L12 3.00055C11.7637 3.00055 11.535 3.08433 11.3545 3.23688L11.3535 3.2359L4.35938 9.23102L4.35449 9.2359C4.24342 9.32979 4.15399 9.44674 4.09277 9.57867C4.0316 9.71054 4 9.85421 4 9.99957V18.9996C4 19.2648 4.10543 19.52 4.29297 19.7076C4.48048 19.895 4.73491 19.9996 5 19.9996H19C19.2651 19.9996 19.5195 19.895 19.707 19.7076C19.8946 19.52 20 19.2648 20 18.9996V9.99957ZM22 18.9996C22 19.7952 21.6837 20.559 21.1211 21.1216C20.5585 21.6841 19.7955 21.9996 19 21.9996H5C4.20447 21.9996 3.44149 21.6841 2.87891 21.1216C2.3163 20.559 2 19.7952 2 18.9996V9.99957C2 9.56347 2.09479 9.13248 2.27832 8.73688C2.46197 8.34108 2.73025 7.99023 3.06348 7.70856L10.0586 1.71344L10.0635 1.70953L10.2734 1.54742C10.7771 1.19289 11.3798 1.00055 12 1.00055L12.2646 1.01227C12.7905 1.05883 13.2948 1.24356 13.7266 1.54742L13.9365 1.70953L13.9414 1.71344L20.9365 7.70856L21.0586 7.81696C21.3356 8.07826 21.561 8.39052 21.7217 8.73688C21.9052 9.13248 22 9.56347 22 9.99957V18.9996Z" fill={activeButton === '/dashboard' ? '#fff' : 'var(--second-base-font-color)'} style={{ fillOpacity: 1 }} /></svg>

    const CalendarIcon = <svg className="w-6 h-6" width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7 6V2C7 1.44772 7.44772 1 8 1C8.55228 1 9 1.44772 9 2V6C9 6.55228 8.55228 7 8 7C7.44772 7 7 6.55228 7 6Z" fill={activeButton === '/calendar' ? '#fff' : 'var(--second-base-font-color)'} style={{ fillOpacity: 1 }} /><path d="M15 6V2C15 1.44772 15.4477 1 16 1C16.5523 1 17 1.44772 17 2V6C17 6.55228 16.5523 7 16 7C15.4477 7 15 6.55228 15 6Z" fill={activeButton === '/calendar' ? '#fff' : 'var(--second-base-font-color)'} style={{ fillOpacity: 1 }} /><path d="M20 6C20 5.44772 19.5523 5 19 5H5C4.44772 5 4 5.44772 4 6V20C4 20.5523 4.44772 21 5 21H19C19.5523 21 20 20.5523 20 20V6ZM22 20C22 21.6569 20.6569 23 19 23H5C3.34315 23 2 21.6569 2 20V6C2 4.34315 3.34315 3 5 3H19C20.6569 3 22 4.34315 22 6V20Z" fill={activeButton === '/calendar' ? '#fff' : 'var(--second-base-font-color)'} style={{ fillOpacity: 1 }} /><path d="M21 9C21.5523 9 22 9.44772 22 10C22 10.5523 21.5523 11 21 11H3C2.44772 11 2 10.5523 2 10C2 9.44772 2.44772 9 3 9H21Z" fill={activeButton === '/calendar' ? '#fff' : 'var(--second-base-font-color)'} style={{ fillOpacity: 1 }} /></svg>

    const TeamIcon = <svg className="w-6 h-6" width="16 " height="16 " viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15 21V19C15 18.2044 14.6837 17.4415 14.1211 16.8789C13.6289 16.3867 12.9835 16.0829 12.2969 16.0146L12 16H6C5.20435 16 4.44152 16.3163 3.87891 16.8789C3.3163 17.4415 3 18.2044 3 19V21C3 21.5523 2.55228 22 2 22C1.44772 22 1 21.5523 1 21V19C1 17.6739 1.52716 16.4025 2.46484 15.4648C3.40253 14.5272 4.67392 14 6 14H12L12.248 14.0059C13.4838 14.0672 14.6561 14.5858 15.5352 15.4648C16.4728 16.4025 17 17.6739 17 19V21C17 21.5523 16.5523 22 16 22C15.4477 22 15 21.5523 15 21Z" fill={activeButton === '/teams' ? '#fff' : 'var(--second-base-font-color)'} style={{ fillOpacity: 1 }} /><path d="M17.9961 7.00008C17.9961 6.33559 17.7757 5.6897 17.3691 5.16415C17.0132 4.70415 16.5321 4.35885 15.9863 4.16805L15.749 4.09579L15.6514 4.06551C15.1761 3.88941 14.9023 3.37825 15.0322 2.87704C15.1622 2.37596 15.6495 2.06289 16.1504 2.13973L16.251 2.16024L16.4502 2.2159C17.4406 2.51689 18.3146 3.11916 18.9502 3.94051C19.628 4.81649 19.9961 5.89248 19.9961 7.00008C19.9961 8.10769 19.628 9.18367 18.9502 10.0597C18.2723 10.9356 17.3232 11.562 16.251 11.8399C15.7164 11.9785 15.1709 11.6576 15.0322 11.1231C14.8936 10.5886 15.2145 10.043 15.749 9.90438C16.3923 9.7376 16.9624 9.36162 17.3691 8.83602C17.7758 8.31046 17.9961 7.66459 17.9961 7.00008Z" fill={activeButton === '/teams' ? '#fff' : 'var(--second-base-font-color)'} style={{ fillOpacity: 1 }} /><path d="M21 21.0001V19.0011L20.9893 18.7531C20.9411 18.1769 20.7275 17.6249 20.3711 17.1652C20.0147 16.7054 19.5334 16.3604 18.9873 16.1701L18.75 16.0978L18.6523 16.0675C18.1769 15.8919 17.9028 15.3813 18.0322 14.88C18.1617 14.3789 18.6485 14.0645 19.1494 14.1408L19.25 14.1622L19.4492 14.2179C20.4401 14.518 21.3158 15.1186 21.9521 15.9396C22.6308 16.8151 22.9991 17.8914 23 18.9992V21.0001C22.9999 21.5524 22.5522 22.0001 22 22.0001C21.4478 22.0001 21.0001 21.5524 21 21.0001Z" fill={activeButton === '/teams' ? '#fff' : 'var(--second-base-font-color)'} style={{ fillOpacity: 1 }} /><path d="M12 7C12 5.34315 10.6569 4 9 4C7.34315 4 6 5.34315 6 7C6 8.65685 7.34315 10 9 10C10.6569 10 12 8.65685 12 7ZM14 7C14 9.76142 11.7614 12 9 12C6.23858 12 4 9.76142 4 7C4 4.23858 6.23858 2 9 2C11.7614 2 14 4.23858 14 7Z" fill={activeButton === '/teams' ? '#fff' : 'var(--second-base-font-color)'} style={{ fillOpacity: 1 }} /></svg>

    const AnalyticIcon = <svg className="w-6 h-6" width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11 20V10C11 9.44772 11.4477 9 12 9C12.5523 9 13 9.44772 13 10V20C13 20.5523 12.5523 21 12 21C11.4477 21 11 20.5523 11 20Z" fill={activeButton === '/analytics' ? '#fff' : 'var(--second-base-font-color)'} style={{ fillOpacity: 1 }} /><path d="M17 20V4C17 3.44772 17.4477 3 18 3C18.5523 3 19 3.44772 19 4V20C19 20.5523 18.5523 21 18 21C17.4477 21 17 20.5523 17 20Z" fill={activeButton === '/analytics' ? '#fff' : 'var(--second-base-font-color)'} style={{ fillOpacity: 1 }} /><path d="M5 20V16C5 15.4477 5.44772 15 6 15C6.55228 15 7 15.4477 7 16V20C7 20.5523 6.55228 21 6 21C5.44772 21 5 20.5523 5 20Z" fill={activeButton === '/analytics' ? '#fff' : 'var(--second-base-font-color)'} style={{ fillOpacity: 1 }} /></svg>

    const ChatIcon = <svg className="w-6 h-6" width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20 5C20 4.73478 19.8946 4.48051 19.707 4.29297C19.5195 4.10543 19.2652 4 19 4H5C4.73478 4 4.48051 4.10543 4.29297 4.29297C4.10543 4.48051 4 4.73478 4 5V18.5859L6.29297 16.293L6.36621 16.2266C6.54417 16.0807 6.76791 16 7 16H19C19.2652 16 19.5195 15.8946 19.707 15.707C19.8946 15.5195 20 15.2652 20 15V5ZM22 15C22 15.7957 21.6837 16.5585 21.1211 17.1211C20.5585 17.6837 19.7957 18 19 18H7.41406L3.70703 21.707C3.42103 21.993 2.99086 22.0786 2.61719 21.9238C2.24359 21.769 2 21.4044 2 21V5C2 4.20435 2.3163 3.44152 2.87891 2.87891C3.44152 2.3163 4.20435 2 5 2H19C19.7956 2 20.5585 2.3163 21.1211 2.87891C21.6837 3.44152 22 4.20435 22 5V15Z" fill={activeButton === '/messages' ? '#fff' : 'var(--second-base-font-color)'} style={{ fillOpacity: 1 }} /></svg>

    // Button list
    const Button = [
        { label: "Dashboard", path: "/dashboard", icon: HomeIcon },
        { label: "Calendar", path: "/calendar", icon: CalendarIcon },
        { label: "Teams", path: "/teams", icon: TeamIcon },
        { label: "Analytics", path: "/analytics", icon: AnalyticIcon },
        { label: "Chat Messages", path: "/messages", icon: ChatIcon },
    ]

    return (
        <div style={{ ...SidebarStyle }}>
            <div style={{ width: "100%", gap: "0px", display: "flex", flexDirection: "column" }}>
                {Button.map(({ label, path, icon }) => (
                    <button key={path} style={{ ...ButtonStyle, ...(activeButton === path ? ActiveButton : PassiveButton) }} onClick={() => navigate(path)}>
                        <span style={{ display: 'flex', flexDirection: "row", gap: '12px', alignItems: "center" }}>
                            {icon}
                            {label}
                        </span>
                    </button>
                ))}
            </div>
        </div>
    )
}

export default SidebarDashboard
