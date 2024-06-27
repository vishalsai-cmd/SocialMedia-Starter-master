import React from 'react'
import './Home.css';    
import Profileside from '../../components/profileside/Profileside';
const Home = () => {
  return (
    <div className='Home'>
        <Profileside />
        <div className='postside'>Posts</div>
        <div className="RightSide">rightside</div>
    </div>
  )
}

export default Home
