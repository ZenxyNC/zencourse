import { useState } from 'react'
import './css/settings.css'

export default function Settings() {
  // eslint-disable-next-line
  const [username, setUsername] = useState(localStorage.getItem('user'))
  return (
    <>
      <div id='settings-content'>
        <div id='user-information'>
          <div id='user-info-profile'></div>
          <div id='user-info-username'>{username}</div>
        </div>
      </div>
    </>
  )
}