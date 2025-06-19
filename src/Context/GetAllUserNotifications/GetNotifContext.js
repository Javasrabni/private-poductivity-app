import React, { createContext, useContext, useEffect, useState } from 'react'

const GetNotifContext = createContext()
const GetNotifProvider = ({ children }) => {
    const [getUserNotif, setGetUserNotif] = useState([])
    useEffect(() => {
        const GetReceiveNotif = async () => {
            try {
                const response = await fetch(`${process.env.REACT_APP_GET_USER_NOTIFICATIONS}`, {
                    credentials: 'include',
                    method: 'GET'
                })
                const data = await response.json()
                if (response.ok) {
                    setGetUserNotif(data)
                    console.log(data)
                }
            } catch (error) {
                console.error(error)
            }
        };
        GetReceiveNotif();
    }, [])
    return (
        <GetNotifContext.Provider value={{ getUserNotif }}>
            {children}
        </GetNotifContext.Provider>
    )
}

export const useGetUserNotif = () => {
    return useContext(GetNotifContext)
}
export default GetNotifProvider
