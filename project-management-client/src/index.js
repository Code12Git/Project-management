import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import Footer from './base/Footer';
import { GoogleOAuthProvider } from '@react-oauth/google';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <GoogleOAuthProvider clientId='755613176741-qpbvgc3klf6e3hottsu6j7hou4upvuo3.apps.googleusercontent.com'>
    <App />
    <Footer />
    </GoogleOAuthProvider>
    </BrowserRouter>
  </React.StrictMode>
);


reportWebVitals();
