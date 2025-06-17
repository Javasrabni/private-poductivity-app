import React, { createContext, useContext, useEffect, useState } from 'react'
const GetUCContext = createContext()
const GetUserConnectionsProvider = ({ children }) => {

    const [userConnections, setUserConnections] = useState([])
    useEffect(() => {
        const FetchGetUserConnections = async () => {
            try {
                const response = await fetch(`${process.env.REACT_APP_GET_USER_CONNECTIONS}`, {
                    credentials: 'include'
                })
                const data = await response.json()
                console.log(data, "USER CONNECTION")
                setUserConnections(data)

            } catch (err) {
                console.error(err)
            }
        }
        FetchGetUserConnections()
    }, [])

    async function HandleClickConnect(userIdToConnect, username, email, photoProfile) {
        try {
            const response = await fetch(`${process.env.REACT_APP_POST_USER_CONNECTIONS}`, {
                credentials: 'include',
                method: "POST",
                body: JSON.stringify({
                    userToConnectId: userIdToConnect,
                    userToConnectUsername: username,
                    userToConnectEmail: email,
                    userToConnectPhotoProfile: photoProfile
                }),
                headers: {
                    'Content-Type': 'application/json',
                }
            })
            const data = await response.json()
            console.log(data.message)

        } catch (err) {
            console.error(err)
        }
    }
    return (
        <GetUCContext.Provider value={{ HandleClickConnect, userConnections }}>
            {children}
        </GetUCContext.Provider>
    )
}

export const useGetUserConnections = () => {
    return useContext(GetUCContext)
}

export default GetUserConnectionsProvider
