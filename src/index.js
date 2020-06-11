import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import b2cauth from 'react-azure-adb2c';

b2cauth.initialize({
  instance: 'tricommlive.b2clogin.com/', 
  tenant: 'tricommlive.onmicrosoft.com',
  signInPolicy: 'B2C_1_tricommsigninup',
  applicationId: 'd4554cb3-83e2-488e-8158-6408dbbaee1a',
  cacheLocation: 'sessionStorage',
  scopes: ['https://tricommlive.b2clogin.com/openId',
           'https://tricommlive.b2clogin.com/offline_access',
           'https://tricommlive.b2clogin.com/profile'],
  redirectUri: 'http://localhost:3000',
  postLogoutRedirectUri: window.location.origin,
});

b2cauth.run(()=>{
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
});

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

/*
  instance: 'tricommlive.b2clogin.com/',
    // your B2C tenant
    tenant: 'tricommlive.onmicrosoft.com',
    // the policy to use to sign in, can also be a sign up or sign in policy
    signInPolicy: 'B2C_1_tricommsigninup',
    // the the B2C application you want to authenticate with (that's just a random GUID - get yours from the portal)
    applicationId: 'd4554cb3-83e2-488e-8158-6408dbbaee1a',
    // where MSAL will store state - localStorage or sessionStorage
    cacheLocation: 'sessionStorage',
    // the scopes you want included in the access token
    scopes: ['https://tricommlive.b2clogin.com/openId','https://tricommlive.b2clogin.com/offline_access','https://tricommlive.b2clogin.com/profile'],
    // optional, the redirect URI - if not specified MSAL will pick up the location from window.href
    redirectUri: 'https://localhost:8080/tricon/secure/aad',
    // optional, the URI to redirect to after logout
    postLogoutRedirectUri: 'http://myapp.com
*/