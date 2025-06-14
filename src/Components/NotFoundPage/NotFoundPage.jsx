import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

// User data
import { useGetUserDP } from '../../Context/UserProfileData/getUserProfileData'

const NotFoundPage = () => {
    const { username, email } = useGetUserDP()
    const [goBack, setGoBack] = useState(null)

    useEffect(() => {
        if (username || email) {
            setGoBack('/dashboard')
        } else {
            setGoBack('/')
        }
    }, [username, email])
    
    return (
        <div>
            <p>Ga ada coy</p>
            <Link to={goBack}>Back to page</Link>
        </div>
    )
}

export default NotFoundPage
