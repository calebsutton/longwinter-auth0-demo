import React, { FunctionComponent } from 'react';

import { Container } from 'semantic-ui-react';

import Head from './Header'

const Layout: FunctionComponent = ({children}) => (
    <>
        <Container>
            <Head title='Long Winter Technology - Auth0 Demo' />
            {children}
        </Container>
    </>
)

export default Layout;