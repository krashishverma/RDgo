// index.js
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App'; // Ensure App is correctly imported
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter> {/* Wrap your app in BrowserRouter */}
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
