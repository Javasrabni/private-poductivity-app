import React, { useEffect, useState } from 'react'
import { useGetAllUserData } from '../../../Context/GetAllUserData/getAllUserData'
import { ReactComponent as MailIcon } from '../../../Assets/Icon/mail.svg'

// Context
import { useGetUserConnections } from '../../../Context/GetUserConnections/GetUserConnectionsContext'
// import { useGetUserDP } from '../../../Context/UserProfileData/getUserProfileData'

const ViewUserProfilePanel = ({ userId, username, email, photoProfile }) => {
    // User data
    // const GetAllUserData = useGetAllUserData()
    // const userConnections = useGetUserConnections()

    const { HandleClickConnect, userConnections } = useGetUserConnections()

    // Style
    const Container = {
        display: 'flex',
        flexDirection: 'column',
        padding: '24px',
        boxShadow: "0px 0px 1px #171a1f12, 0px 0px 2px #171a1f1F",
        height: '100%',
        width: '100%'
    }
    const photoProfileContainer = {
        width: '128px',
        height: '128px',
        borderRadius: '100%',
        backgroundColor: 'var(--second-baseColor)',
        marginBottom: '18px'
    }
    const usernameStyle = {
        fontFamily: 'Archivo', /* Heading */
        fontSize: '24px',
        lineHeight: '32px',
        fontWeight: '600',
    }
    const emailStyle = {
        fontFamily: 'inter', /* Heading */
        fontSize: '14px',
        lineHeight: '20px',
        fontWeight: '400',
        color: 'var(--second-base-font-color)'
    }
    const messageButtonStyle = {
        marginTop: '32px',
        display: 'flex',
        alignItems: 'center',
        border: '1px solid var(--border)',
        backgroundColor: 'transparent',
        justifyContent: 'center',
        height: '40px',
        color: 'var(--baseColorBlack)',
        width: '50%',
        borderRadius: '8px',
        cursor: 'pointer',
        fontSize: '14px',
        lineHeight: '20px',
        fontWeight: 500,
        padding: '12px',

    }

    const [userConnected, setUserConnected] = useState(false)

    useEffect(() => {
        const isConnected = userConnections?.some(item => item.connected_with === userId)
        if (isConnected) {
            setUserConnected(true)
        } else {
            setUserConnected(false)
        }
    }, [userConnections, userId])

    const ConnectIcon = <svg className="w-6 h-6" width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9.10059 1.00391C9.30178 1.02014 9.49627 1.08471 9.66699 1.19238L9.75 1.25L9.82812 1.31348C9.97922 1.44708 10.096 1.61531 10.168 1.80371L10.2031 1.90918L15 18.9775L16.627 13.1895C16.804 12.5584 17.1834 12.0028 17.7061 11.6074C18.2281 11.2125 18.865 10.9992 19.5195 11H22C22.5523 11 23 11.4477 23 12C23 12.5523 22.5523 13 22 13H19.5176C19.2992 12.9996 19.0863 13.0704 18.9121 13.2021C18.7815 13.301 18.6779 13.4302 18.6094 13.5771L18.5527 13.7305L16.2031 22.0908L16.168 22.1963C16.084 22.416 15.9392 22.6081 15.75 22.75C15.5336 22.9123 15.2705 23 15 23C14.7295 23 14.4664 22.9123 14.25 22.75C14.0608 22.6081 13.916 22.416 13.832 22.1963L13.7969 22.0908L8.99902 5.02148L7.37305 10.8105C7.19669 11.4391 6.81945 11.9925 6.2998 12.3877C5.78012 12.7828 5.14601 12.9981 4.49316 13H2C1.44772 13 1 12.5523 1 12C1 11.4477 1.44772 11 2 11H4.4873C4.70491 10.9993 4.91663 10.9276 5.08984 10.7959C5.26298 10.6642 5.38852 10.479 5.44727 10.2695L7.79688 1.90918L7.83203 1.80371C7.91597 1.58404 8.06078 1.39192 8.25 1.25L8.33301 1.19238C8.53204 1.06686 8.76332 1 9 1L9.10059 1.00391Z" fill={userConnected ? 'var(--blue-accent)' : 'var(--baseColor)'} style={{ fillOpacity: 1 }} /></svg>

    return (
        <div style={{ ...Container }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>
                {/* Photo profile */}
                <div style={{ ...photoProfileContainer }}>
                    {/* <img style={{ width: '100%' }} src={photoProfile} alt={`${username} Photo profile`} /> */}
                </div>
                <h1 style={{ ...usernameStyle }}>{username}</h1>
                <p style={{ ...emailStyle }}>{email}</p>
                {/* <p>{userId}</p> */}

                {/* Button */}
                <div style={{ display: 'flex', gap: '16px', width: '100%' }}>
                    <button style={{ ...messageButtonStyle }}><span style={{ display: 'flex', alignItems: 'center', width: '100%', gap: '12px', justifyContent: 'center' }}><MailIcon fill={'red'} color={'red'} fontSize={'12px'} /> Message</span></button>

                    <button style={{ ...messageButtonStyle, border: userConnected ? 'var(--second-baseColor2)' : '1px solid var(--blue-accent)', backgroundColor: userConnected ? 'var(--second-baseColor2)' : 'var(--blue-accent)', color: userConnected ? 'var(--blue-accent)' : 'var(--baseColor)' }} onClick={() => { HandleClickConnect(userId, username, email, photoProfile); setUserConnected(prev => !prev) }}>
                        <span style={{ display: 'flex', alignItems: 'center', width: '100%', gap: '12px', justifyContent: 'center' }} >
                            {ConnectIcon}
                            {userConnected ? 'Connected' : 'Connect'}
                        </span>
                    </button>
                </div>

                {/* Status aktifitas */}
                {/* <div>
                    <p>Aktif 2 jam yang lalu</p>
                </div> */}
            </div>
        </div>
    )
}

export default ViewUserProfilePanel
