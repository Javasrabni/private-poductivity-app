import React, { createContext, useContext, useState, useEffect } from 'react'

const GetAllUDContext = createContext()
const GetAllUserDataProvider = ({ children }) => {
    // GET ALL USER DATA
    const [allUserDataProfile, setAllUserDataProfile] = useState([])
    useEffect(() => {
        const getAllUserData = async () => {
            try {
                const response = await fetch(`${process.env.REACT_APP_GET_ALL_USER_DP}`, {
                    credentials: 'include'
                })
                const data = await response.json()
                if (response.ok) {
                    setAllUserDataProfile(data)
                }
            } catch (error) {
                console.error(error)
            }
        }

        getAllUserData()
    }, [])
    return (
        <GetAllUDContext.Provider value={allUserDataProfile}>
            {children}
        </GetAllUDContext.Provider>
    )
}

export const useGetAllUserData = () => {
    return useContext(GetAllUDContext)
}

export default GetAllUserDataProvider
