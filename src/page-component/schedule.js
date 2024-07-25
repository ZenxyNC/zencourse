import { useState } from 'react';
import './css/schedule.css';
import monday from '../resource/schedule-image/Monday-XI.png';
import tuesday from '../resource/schedule-image/Tuesday-XI.png';
import wednesday from '../resource/schedule-image/Wednesday-XI.png';
import thursday from '../resource/schedule-image/Thursday-XI.png';
import friday from '../resource/schedule-image/Friday-XI.png';
import zen from '../resource/Icon.png'
import { useNavigate } from 'react-router-dom';

export default function Schedule() {
  const digitToDay = {
    "1": "monday",
    "2": "tuesday",
    "3": "wednesday",
    "4": "thursday",
    "5": "friday",
    "6": "saturday",
    "0": "sunday"
  };
  
  const dayToImage = {
    "monday": monday,
    "tuesday": tuesday,
    "wednesday": wednesday,
    "thursday": thursday,
    "friday": friday,
    "saturday" : monday,
    "sunday" : monday
    // Add images for other days if available
  };
  const navigate = useNavigate()

  const getDay = (parameter) => {
    if (parameter === 'current') {
      let date = new Date();
      return digitToDay[date.getDay().toString()];
    }
  };

  const [day, setDay] = useState(getDay('current'));
  const [navigation, setNavigation] = useState(false)

  function fsetNavigation(to) {
    if (window.innerWidth >= 900) {
      setNavigation(false)
    } else {
      setNavigation(to)
    }
  }

  return (
    <>
      <div id='base-body'>
        <div className={`navigation-page ${navigation ? 'show' : 'hidden'}`}>
          <div id='navigationPage-title'>ZenCourse</div>
          <div id='navigation-content-grid'></div>
          <div className='navigation-content-href'>
            <div className='navigation-href-title' onClick={() => navigate('/zencourse/home', {replace : true})}>Home</div><br/>
            <div className='navigation-href-title' onClick={() => fsetNavigation(false)}>Schedule</div><br/>
            <div className='navigation-href-title' onClick={() => navigate('/zencourse/home', {replace : true})}>Task</div><br/>
            <div className='navigation-href-title' onClick={() => navigate('/zencourse/home', {replace : true})}>Presence</div>
          </div>
        </div>
        <div id='floating-navbar'>
          <img src={zen} id='navbar-icon' onClick={() => navigate('/zencourse/home', {replace : true})} alt=''/>
          <div id='burger-menu' onClick={() => fsetNavigation(true)}>
          </div>
          <div id='user-profile' onClick={() => navigate('/zencourse/utilities/settings', {replace : true})}></div>
        </div>
        <div id="schedule-images">
          <img src={dayToImage[day]} alt={day} id='schedule-image'/>
        </div>
        <div id='day-selector'>
          <button onClick={() => setDay('monday')} className={`day-button ${day === 'monday' || day === 'saturday' || day === 'sunday' ? 'active' : 'idle'}`}>Monday</button>
          <button onClick={() => setDay('tuesday')} className={`day-button ${day === 'tuesday' ? 'active' : 'idle'}`}>Tuesday</button>
          <button onClick={() => setDay('wednesday')} className={`day-button-wed ${day === 'wednesday' ? 'active' : 'idle'}`}>Wednesday</button>
          <button onClick={() => setDay('thursday')} className={`day-button ${day === 'thursday' ? 'active' : 'idle'}`}>Thursday</button>
          <button onClick={() => setDay('friday')} className={`day-button ${day === 'friday' ? 'active' : 'idle'}`}>Friday</button>
        </div>
      </div>
    </>
  );
}
