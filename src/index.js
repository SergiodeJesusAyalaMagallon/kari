import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App.jsx';
import {UserProvider, UseUser} from './Context/UserContext'
require('dotenv').config();

ReactDOM.render(
  <React.StrictMode>
    <UserProvider><App /></UserProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
