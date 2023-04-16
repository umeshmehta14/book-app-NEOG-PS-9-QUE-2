import React, { useContext } from 'react'
import { DataContext } from '../Contexts/DataProvider'

const Profile = () => {
  const {userDetail} = useContext(DataContext);
  return (
    <div className='profile-container'>
      <h1>Profile</h1>
      <img src={userDetail.img} alt="Image" height="300px" width="300px" />
      <h3>Name:{userDetail.name}</h3>
      <p><strong>Bio:</strong>{userDetail.bio}</p>

    </div>
  )
}

export default Profile
