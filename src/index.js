import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './styles/global.css';

// Create a root
const root = createRoot(document.getElementById('root'));

// Render the app
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
