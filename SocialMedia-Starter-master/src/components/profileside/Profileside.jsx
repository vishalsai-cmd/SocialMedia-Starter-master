import React from 'react'
import LogoSearch from '../LogoSearch/LogoSearch'
import ProfileCard from '../ProfileCard/ProfileCard'

import "./Profileside.css";
import FollowersCard from '../FollowersCard/FollowersCard';

const Profileside = () => {
  return (
    <div className='Profileside'>
      <LogoSearch />  
      <ProfileCard />  
      <FollowersCard />    
    </div>
  )
}

export default Profileside
