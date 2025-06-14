import React from 'react'
// User data
import { useGetUserDP } from '../../../../Context/UserProfileData/getUserProfileData'

const OverviewDashboard = () => {
    // Style
    const Container = {
        height: 'fit-content',
        width: '100%',
        boxShadow: "0px 0px 1px #171a1f12, 0px 0px 2px #171a1f1F",
        // border: '1px solid var(--border)',
        borderRadius: '8px',
        padding: '24px'
    }
    // Heading
    const GreetingUserStyle = {
        fontFamily: 'Archivo',
        fontSize: '30px',
        lineHeight: '36px',
        fontWeight: 700,
        color: '#242524FF',
    }
    // Body
    const GreetingUserStyle2 = {
        fontFamily: 'Inter',
        fontSize: '18px',
        lineHeight: '28px',
        fontWeight: 400,
        color: '#8C8D8BFF',
    }

    // User data
    const { username, email } = useGetUserDP()

    return (
        <div style={{ ...Container }}>
            <h1 style={{ ...GreetingUserStyle }}>Welcome back, {username}!</h1>
            <p style={{...GreetingUserStyle2}}>Here's your dashboard overview.</p>
        </div>
    )
}

export default OverviewDashboard
