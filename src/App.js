import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import Login from './page-component/login.js';
import Home from './page-component/home.js'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/ZenCourse/login" element={<Login />} />
        <Route path="/ZenCourse/home" element={<Home />} />
        <Route path="/ZenCourse" element={<MainApp />} />
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
      navigate('/ZenCourse/home')
    } else {
      navigate('/ZenCourse/login', { replace: true });
    }
  }, [isLoggedIn, navigate]);

}

export default App;
