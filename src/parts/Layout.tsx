import React, { FunctionComponent } from 'react';
import { Link } from 'react-router-dom'
import { Container, Divider } from 'semantic-ui-react';

import Head from './Head'
import SessionManager from './SessionManager'

const Layout: FunctionComponent = ({children}) => (
    <Container textAlign='center'>
        <Divider hidden></Divider>
        <Head title='Long Winter Technology - Auth0 Demo' />
        <Link to='/'>Home</Link>
        <Link to='/profile'>Profile</Link>
        <SessionManager />
        {children}
    </Container>
)

export default Layout;