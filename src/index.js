import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import FunctionalComponent from './composant/FunctionalComponent';
import LoginComponent from './composant/EXO29';
import EXO30 from './composant/EXO30';
import LoginForm from './composant/EXO31';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <FunctionalComponent couleur={'yellow'} />
    <LoginComponent />
    <EXO30 />
    <LoginForm />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
