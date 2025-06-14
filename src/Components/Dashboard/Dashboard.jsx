import React from 'react'
import { useGetUserDP } from '../../Context/UserProfileData/getUserProfileData'

const Dashboard = () => {
  const { username, email } = useGetUserDP()

  return (
    <div>
      <p>ini dashboard tol</p>
      <h1>nama : {username}</h1>
      <h1>email : {email}</h1>
    </div>
  )
}

export default Dashboard
