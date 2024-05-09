import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { Auth0Provider } from '@auth0/auth0-react';
import './index.css'
// import { CLIENT_ID } from 'dotenv/config'
import LoginButton from './components/LoginButton.tsx';
// import LogoutButton from './components/LogoutButton.tsx';
import Profile from './components/Profile.tsx';
import NavBar from './components/Navbar.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Auth0Provider
    domain="dev-uqs61mphrgltdtik.us.auth0.com"
    clientId={import.meta.env.CLIENT_ID}
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
    <NavBar/>
    <LoginButton/>
    <Profile/>
    <App />
  </Auth0Provider>
  </React.StrictMode>
)
