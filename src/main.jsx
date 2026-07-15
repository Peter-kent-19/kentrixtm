// Import StrictMode to enable additional development checks
import { StrictMode } from 'react';
// Import createRoot for rendering the application into the DOM
import { createRoot } from 'react-dom/client';
// Import global index.css for tailwind and base styles
import './index.css';
// Import the main App component
import App from './App.jsx';

// Create the root element by targeting the 'root' div in index.html and render the App
createRoot(document.getElementById('root')).render(
  // Wrap the application in StrictMode for best practices
  <StrictMode>
    {/* Main application entry point component */}
    <App />
  </StrictMode>,
);
