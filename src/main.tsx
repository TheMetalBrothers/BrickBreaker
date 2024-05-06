import React from 'react'
import ReactDOM from 'react-dom/client'
import { Auth0Provider } from '@auth0/auth0-react';
import App from './App.tsx'
import './index.css'
import LoginButton from './components/LoginButton.tsx';
import LogoutButton from './components/LogoutButton.tsx';
import Profile from './components/Profile.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Auth0Provider
    domain="dev-uqs61mphrgltdtik.us.auth0.com"
    clientId="b3yGs1T1E268RarxROfAahiZUsr4CPBw"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
    >
    <LoginButton/>
    <LogoutButton/>
    <Profile/>
    <App />
  </Auth0Provider>
  </React.StrictMode>
)
