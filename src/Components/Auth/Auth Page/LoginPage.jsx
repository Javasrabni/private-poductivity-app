import React, { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useGetUserDP } from '../../../Context/UserProfileData/getUserProfileData'


const LoginPage = () => {
    const navigate = useNavigate()
    const { username, email } = useGetUserDP()

    useEffect(() => {
        if (username || email) {
            navigate('/dashboard')
        }
    }, [username, email])

    return (
        <div>
            <p>lu blom login tot</p>
            <Link to={'http://localhost:8003/auth/google'}>DISINI</Link>
        </div>
    )
}

export default LoginPage
