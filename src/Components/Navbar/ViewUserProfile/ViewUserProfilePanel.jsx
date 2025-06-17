import React, { useEffect } from 'react'
import { useGetAllUserData } from '../../../Context/GetAllUserData/getAllUserData'
import { ReactComponent as MailIcon } from '../../../Assets/Icon/mail.svg'
import { ReactComponent as ConnectIcon } from '../../../Assets/Icon/connect.svg'

// Context
import { useGetUserConnections } from '../../../Context/GetUserConnections/GetUserConnectionsContext'
import { useGetUserDP } from '../../../Context/UserProfileData/getUserProfileData'

const ViewUserProfilePanel = ({ userId, username, email, photoProfile }) => {
    // User data
    // const GetAllUserData = useGetAllUserData()
    const { HandleClickConnect } = useGetUserConnections()


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

    // useEffect(() => {
    //     console.log(userId, username, email, photoProfile)
    // })

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

                    <button style={{ ...messageButtonStyle, border: '1px solid var(--blue-accent)', backgroundColor: 'var(--blue-accent)', color: '#fff' }}><span style={{ display: 'flex', alignItems: 'center', width: '100%', gap: '12px', justifyContent: 'center' }} onClick={() => { HandleClickConnect(userId, username, email, photoProfile); }}><ConnectIcon fill={'red'} color={'red'} fontSize={'12px'} /> Connect</span></button>
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
