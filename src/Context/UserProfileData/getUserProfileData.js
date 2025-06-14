import React, { createContext, useContext, useEffect, useState } from 'react'

const UserDPContext = createContext()
const GetUserDPProvider = ({ children }) => {
    const [userDataProfile, setUserDataProfile] = useState({})
    useEffect(() => {
        const getUserData = async () => {
            try {
                const response = await fetch(`${process.env.REACT_APP_GET_USER_DP}`, {
                    credentials: 'include',
                })
                const data = await response.json()
                if (response.ok) {
                    setUserDataProfile(data)
                }
            } catch (error) {
                console.error(error)
            }
        }
        getUserData()
    }, [])
    return (
        <UserDPContext.Provider value={userDataProfile}>
            {children}
        </UserDPContext.Provider>
    )
}

export const useGetUserDP = () => {
    return useContext(UserDPContext)
}

export default GetUserDPProvider;
