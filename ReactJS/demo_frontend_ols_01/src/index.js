import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Router, Routes, Route, Switch } from 'react-router-dom';
//import DefaultLayout from './Components/DefaultLayout'; <DefaultLayout />

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);