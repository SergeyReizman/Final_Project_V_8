// The entry point file

// Importing the necessary modules from React library
import React from 'react';
import ReactDOM from 'react-dom/client';

// Importing the main component of the application
import App from './App.jsx';

// Importing the styles for the application
import './index.css';

// Using ReactDOM.createRoot to render the main component into the root element
// React.StrictMode is used for highlighting potential problems in the application
ReactDOM.createRoot(document.getElementById('root')).render(
  // Wrapping the main component (App) with React.StrictMode for additional checks
  <React.StrictMode>
    {/* Rendering the main component (App) */}
    <App />
  </React.StrictMode>,
);
