import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './css/home.css'
import zen from './Icon.png'

export default function Home() {
  const [username, setUsername] = useState(localStorage.getItem('user'))
  const [isLoggedIn, setLogs] = useState(localStorage.getItem('isLoggedIn'))
  const navigate = useNavigate()

  if (isLoggedIn) {

  } else {
    navigate('/zencourse/login', {replace : true})
  }
  
  return (
    <>
      <div id='homenav'>
        <img src={zen} alt='' id='homenav-profile'/>
        <div id='user-greeting'>
          <span>Hello, </span><br/>
          <span>{username}</span>
        </div>
      </div>
      <div id='widget-base'>
        <div className='user-greeting desktop-greeting'>
          <span>Hello, </span><br/>
          <span>{username}</span>
        </div>
        <div id='widget'>
          <div className='widget-title'>Summary</div>
          <span className='widget-body'>
            hello world
          </span>
          <span className='widget-body'>
            hello world
          </span>
        </div>
      </div>
    </>
  )

}