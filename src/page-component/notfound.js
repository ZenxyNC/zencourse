import './css/notfound.css'
import { useNavigate } from 'react-router-dom'

export default function NotFound() {
  const navigate = useNavigate()

  const doAction = (type) =>  {
    if (type === "login") {
      navigate('/zencourse/login')
    } else if (type === "home") {
      navigate('/zencourse/home')
    } else if (type === "lost") {
      alert("This option will available soon, the developer is too tired :(")
    }
  }
  return(
    <>
      <div id='pageContent'>
        <div className='pageTitle'>
          <span>Are you lost?</span><br/>
        </div>
        <div className='pageDesc'>Sorry! An error occured while we finding this page.<br/>Maybe this option could help you!</div>
        <div className='direct-button-panel'>
          <button className='direct-button' onClick={() => doAction('login')}>Login</button><br/>
          <button className='direct-button' onClick={() => doAction('home')}>Home</button>
        </div>
      </div>
        <button className='direct-button-lost' onClick={() => doAction('lost')}>I'm lost, I need some help!</button>
    </>
  )
}