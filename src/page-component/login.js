import { useNavigate } from "react-router-dom";
import React, { useState ,useRef, useEffect } from "react";
import './css/login.css'
import { data } from '../userdata.js'
import Home from './home.js'

export default function Login() {
  const [UID, setUID] = useState('')
  const [security, setSecurity] = useState({
    type : 'password',
    ssc : ''
  })
  const navigate = useNavigate();

  const proceedLogs = (e) => {
    e.preventDefault()
    const unpassval = data.find((unpassval) => unpassval.user === UID && unpassval.ssc === security.ssc)
    if (unpassval) {
      localStorage.setItem('user', UID)
      localStorage.setItem('isLoggedIn', true)
      navigate('/zencourse/home', {replace : true})
    } else {
      console.log('Login failed')
    }
  }

  const handlePasscode = (e) => {
    const {name, value} = e.target;
    setSecurity({
      ...security,
      [name] : value
    })
  }

  const selectSSC = (e) => {
    setSecurity({
      ...security,
      type : e
    })
    console.log(security.type, security.ssc)
  }

  const UIDInput = useRef();
  useEffect(() => {
    UIDInput.current.focus();
  }, [])

  return (
    <>  
      <div id="base-div">
        <div id="sscType">
          <span className="ssctag" onClick={(e) => selectSSC('password')}>Password</span>
          <span className="ssctag" onClick={(e) => selectSSC('secpin')}>Security PIN</span>
          <div id="selected-ssctag" className={`selected-ssctag ${security.type === 'password' ? 'password' : 'secpin'}`}></div>
        </div>
        <form onSubmit={proceedLogs}>
          <div className="input-field">
            <input
              type="text"
              onInput={(e) => setUID(e.target.value)}
              placeholder="Username or UID"
              ref={UIDInput}
              required
            /><br/>
            <input
              type="password"
              onInput={handlePasscode}
              placeholder={security.type === 'password' ? 'Password' : 'Security PIN'}
              value={security.ssc}
              name="ssc"
              className={`ssctype-input ${security.type === 'password' ? 'password' : 'secpin'}`}
              required
            /><br/>
            <button type="submit">Log in</button><br/>
            <span className="forgotten">Forgot my login information</span>
          </div>
        </form>
      </div>
    </>
  )
}