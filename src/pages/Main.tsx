import React, { FunctionComponent } from 'react';
import { Segment, Header } from 'semantic-ui-react';

import Layout from '../parts/Layout';

const Main: FunctionComponent = () => (
    <Layout>
        <Segment textAlign='left'>
            <Header>Demo App</Header>
            <p>
                This is a demo app intended to provide a template for simple auth workflows using auth0.
            </p>
            <p>
                This SPA is built with React, Semantic-UI and Auth0.
            </p>
        </Segment>
    </Layout>
)

export default Main;