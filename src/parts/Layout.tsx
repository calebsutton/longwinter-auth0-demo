import React, { FunctionComponent } from 'react';
import { Container, Divider } from 'semantic-ui-react';

import Head from './Head'
import Nav from './Nav'

const Layout: FunctionComponent = ({children}) => (
    <Container textAlign='center'>
        <Divider hidden></Divider>
        <Head title='Long Winter Technology - Auth0 Demo' />
        <Nav />
        {children}
    </Container>
)

export default Layout;