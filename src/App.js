import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import Login from './page-component/login.js';
import Home from './page-component/home.js';
import Schedule from './page-component/schedule.js'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/zencourse/login" element={<Login />} />
        <Route path="/zencourse/home" element={<Home />} />
        <Route path="/zencourse/utilities/schedule" element={<Schedule />} />
        <Route path="/zencourse" element={<MainApp />} />
      </Routes>
    </Router>
  );
}

function MainApp() {
  const navigate = useNavigate();
  const [isLoggedIn, setLog] = useState(localStorage.getItem('isLoggedIn'));
  const [userInfo, setInfo] = useState({
    name: '',
    email: ''
  });

  useEffect(() => {
    if (isLoggedIn) {
      setInfo({
        name: localStorage.getItem('name'),
        email: localStorage.getItem('email')
      });
      navigate('/zencourse/home')
    } else {
      navigate('/zencourse/login', { replace: true });
    }
  }, [isLoggedIn, navigate]);

}

export default App;
