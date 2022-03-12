import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import 'flowbite';
import reportWebVitals from './reportWebVitals';
import { LoginProvider } from './contexts/AuthContext';
import { BrowserRouter as Router } from 'react-router-dom';
import { UserProvider } from './contexts/UserContext';

ReactDOM.render(
  <React.StrictMode>
    <UserProvider>
      <LoginProvider>
        <Router>
          <App />
        </Router>
      </LoginProvider>
    </UserProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
