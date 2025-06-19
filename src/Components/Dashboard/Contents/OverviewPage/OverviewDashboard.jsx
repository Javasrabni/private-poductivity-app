import React from 'react'
// User data
import { useGetUserDP } from '../../../../Context/UserProfileData/getUserProfileData'

const OverviewDashboard = () => {
    // Style
    const Container = {
        height: 'fit-content',
        width: '100%',
        // boxShadow: "0px 0px 1px #171a1f12, 0px 0px 2px #171a1f1F",
        // border: '1px solid var(--border)',
        borderRadius: '8px',
        // padding: '24px'
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
        fontSize: '16px',
        lineHeight: '28px',
        fontWeight: 400,
        color: '#8C8D8BFF',
        paddingTop: '4px'
    }

    // User data
    const { username, email } = useGetUserDP()

    // Statistic
    const StatisticCard = [
        { Heading: 'Total Tasks Completed', scoreValue: 1.245, desc: 'This month', Percent: `${'7'}% Compared to previous period` },
        { Heading: 'Active Projects', scoreValue: 0, desc: 'Currently running', Percent: `${'12'}% Compared to previous period` },
        { Heading: 'Team Productivity Score', scoreValue: 0, desc: 'Last 7 days', },
        { Heading: 'Upcoming Deadlines', scoreValue: 0, desc: 'Next 3 days', Percent: `${'2'}% Compared to previous period` },
    ]

    const StatisticCardContainer = {
        paddingTop: '28px',
        display: 'flex',
        flexDirection: 'row',
        gap: '24px',
        width: '100%',
        flexShrink: 0,
        flexWrap: 'wrap'
    }
    const StatisticCardBoxStyle = {
        borderRadius: '8px',
        // width: '254px',
        width: '212px',
        // height: '184px',
        minHeight: '164px',
        height: 'fit-content',
        border: '1px solid var(--border)',
        padding: '24px',
        flexShrink: 0
    }
    const HeadingStyle = {
        fontSize: '14px',
        fontWeight: '500',
        fontFamily: 'inter',
        color: 'var(--second-base-font-color)',
        paddingBottom: '8px'
    }
    const scoreValueStyle = {
        fontFamily: 'Archivo', /* Heading */
        fontSize: '24px',
        lineHeight: '32px',
        fontWeight: '700',
        color: '#242524FF',
    }
    const descStyle = {
        fontFamily: 'inter', /* Heading */
        fontSize: '12px',
        lineHeight: '16px',
        fontWeight: '400',
        color: 'var(--second-base-font-color)',
        paddingBottom: '6px'
    }
    const percentStyle = {
        fontFamily: 'inter', /* Heading */
        fontSize: '12px',
        lineHeight: '16px',
        fontWeight: '500',
        color: '#22C55EFF',
    }

    return (
        <>
            {/* <div style={{ ...Container }}>
                <h1 style={{ ...GreetingUserStyle }}>Welcome back, {username}!</h1>
                <p style={{ ...GreetingUserStyle2 }}>Here's your dashboard overview.</p>
            </div> */}
            <div style={{ ...Container }}>
                <h1 style={{ ...GreetingUserStyle }}>Dashboard Overview</h1>
                <p style={{ ...GreetingUserStyle2 }}>Welcome, {username} Here's a quick look at your team's performance and upcoming activities.</p>
            </div>

            <div style={{ ...StatisticCardContainer }}>
                {StatisticCard.map((itm, idx) => (
                    <div key={idx} style={{ ...StatisticCardBoxStyle }}>
                        <p style={{ ...HeadingStyle }}>{itm.Heading}</p>
                        <h1 style={{ ...scoreValueStyle }}>{itm.scoreValue}</h1>
                        <p style={{ ...descStyle }}>{itm.desc}</p>
                        <p style={{ ...percentStyle }}>{itm.Percent}</p>
                    </div>
                ))}

            </div>

        </>
    )
}

export default OverviewDashboard
