import React from 'react';
import ReactDOM from 'react-dom';

import {
    BrowserRouter as Router,
    Switch, Route
    } from 'react-router-dom'

import 'semantic-ui-css/semantic.min.css'

import Main from './pages/Main';
import Profile from './pages/Profile'
import Login from './pages/Login'
import { Auth0Provider } from './utilities/react-auth0';
import { createBrowserHistory } from 'history'

import config from "./auth_config.json"

const onRedirectCallback = (redirectResult?: RedirectLoginResult) => {
    const targetUrl = redirectResult && redirectResult.appState && redirectResult.appState.targetUrl 
        ? redirectResult.appState.targetUrl
        : window.location.pathname

    createBrowserHistory().push(targetUrl);
}


ReactDOM.render(
    <Auth0Provider
        domain={config.domain}
        client_id={config.clientId}
        redirect_uri={window.location.origin}
        onRedirectCallback={onRedirectCallback}
        connection="windowslive">
        <Router>
            <Switch>
                <Route path='/profile'>
                    <Profile />
                </Route>
                <Route path='/login'>
                    <Login />
                </Route>
                <Route path='/'>
                    <Main />
                </Route>
            </Switch>
        </Router>
    </Auth0Provider>, 
    document.getElementById('root')
);