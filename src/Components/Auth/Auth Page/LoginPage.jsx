import React from 'react'
import { Link } from 'react-router-dom'

const LoginPage = () => {
    return (
        <div>
            <p>lu blom login tot</p>
            <Link to={'http://localhost:8003/auth/google'}>DISINI</Link>
        </div>
    )
}

export default LoginPage
