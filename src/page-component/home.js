import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './css/home.css'
import zen from './Icon.png'

export default function Home() {
  const quotesQuery = [
    "School isn't the priority, it just a formality.",
    "Experience and exploration are the best teacher.",
    "Everything starts from your mindset",
    "There's always hard time in everything.",
    "School isn't the only way to learn things",
    "You're not failing, but you find a thousands of ways that won't work"
  ]
  function getQuotes() {
    return quotesQuery[Math.trunc(Math.random() * quotesQuery.length)]
  }
  const [username, setUsername] = useState(localStorage.getItem('user'))
  const [isLoggedIn, setLogs] = useState(localStorage.getItem('isLoggedIn'))
  const [quotes, setQuotes] = useState(getQuotes());
  const [isQuotes, setIsQuotes] = useState(false) 
  const [quotesState, setQuoteState] = useState("Quotes")
  const navigate = useNavigate()

  if (isLoggedIn) {

  } else {
    navigate('/zencourse/login', {replace : true})
  }
  function setQuotesStatus() {
    if (isQuotes) {
      setIsQuotes(false)
      setQuoteState("Quotes")
    } else {
      setIsQuotes(true)
      setQuoteState(quotes)
    }
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
          {/*Summary tiles*/}
          <div id='summary-tiles'>
            <div className='widget-title'>Summary</div>
            <div className='widget-body'></div>
            <div className='widget-body'></div>
          </div>

          {/*Utilities*/}
          <div id='utilities-tiles'>
            <div className='widget-title'>Utilities</div>
            <div className='utilities-button-panel'>
              <button onClick={() => navigate('/zencourse/utilities/schedule', {replace : true})} className='utilities-button'>Schedule</button><br/>
              <button className='utilities-button'>Task</button><br/>
              <button className='utilities-button'>Presence</button>
            </div>
            <div id='quotesOfTheDay' onClick={setQuotesStatus}>
              <div className={`quotesButton ${isQuotes ? 'opened' : 'idle'}`}>
                {quotesState}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}