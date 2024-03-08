import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { GoogleOAuthProvider } from '@react-oauth/google';

const root = ReactDOM.createRoot(document.getElementById('root'));
const clientId = process.env.REACT_APP_CLIENT_ID;
root.render(
  
  <GoogleOAuthProvider clientId={clientId}>
  
    <App />
  
  </GoogleOAuthProvider>
);
