import React, { useEffect } from 'react'
import { useGetAllUserData } from '../../../Context/GetAllUserData/getAllUserData'

const ViewUserProfilePanel = ({ userId, username, email, photoProfile }) => {
    // User data
    // const GetAllUserData = useGetAllUserData()

    const Container = {
        display: 'flex',
        flexDirection: 'column',
        padding: '24px',
        boxShadow: "0px 0px 1px #171a1f12, 0px 0px 2px #171a1f1F",
        height: '100%',
        width: '100%'
    }
    useEffect(() => {
        console.log(userId, username, email, photoProfile)
    }, [])
    
    return (
        <div style={{ ...Container }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>
                <h1>{username}</h1>
                <p>{email}</p>
                <p>{userId}</p>
            </div>
        </div>
    )
}

export default ViewUserProfilePanel
