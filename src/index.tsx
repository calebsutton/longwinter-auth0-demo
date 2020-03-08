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

ReactDOM.render(
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
    </Router>, 
    document.getElementById('root')
);