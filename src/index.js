import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import WeatherContextProvider from './context/WeatherContextProvider';

import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <WeatherContextProvider>
    <Router>
      
      <App />
    
    </Router>

  </WeatherContextProvider>
  
);
