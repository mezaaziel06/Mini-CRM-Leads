
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginPage from './Assets/Pages/Login/LoginPage';
import DashboardPage from './Assets/Pages/Dashboard/DashboardPage';
import LandingPage from './Assets/Pages/Welcome/LandingPage';

const App: React.FC = () => {
  return (
    <div className="font-sans">
      <LoginForm />
    </div>
  );
}

export default App;
