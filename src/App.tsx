import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, useLocation } from 'react-router-dom';
import DashboardLayout from './components/DashboardLayout';

function App({ Component, pageProps }: any) {
  const location = useLocation();
  console.log(location);
  return (
    <div>
      <DashboardLayout></DashboardLayout>
    </div>
  );
}

export default App;
