import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import Login from './page-component/login.js';
import Home from './page-component/home.js'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/app/login" element={<Login />} />
        <Route path="/app/home" element={<Home />} />
        <Route path="/*" element={<MainApp />} />
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
    } else {
      navigate('/app/login', { replace: true });
    }
  }, [isLoggedIn, navigate]);

  return (
    <div>
      {/* Your main app components go here */}
      <h1>Welcome, {userInfo.name}</h1>
      <p>Email: {userInfo.email}</p>
    </div>
  );
}

export default App;
