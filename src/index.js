import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Favicon from 'react-favicon';
import n from "../src/Components/Stuff/n.png"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Favicon url={n}/>
    <App />
  </React.StrictMode>
);

reportWebVitals();
