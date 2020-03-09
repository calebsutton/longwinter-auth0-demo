import React, { FunctionComponent } from 'react';
import { Card } from 'semantic-ui-react';

import { useAuth0 } from "../utilities/react-auth0";

import Layout from '../parts/Layout'

const Profile: FunctionComponent = () => {
    const {loading, user} = useAuth0();
    
    const name = (!loading && user ? user.name : "No user logged in.")
    const email = (!loading && user ? user.email : "No user logged in.")

    return (
        <Layout>
            <Card centered>
                <Card.Content>
                    <Card.Header>
                        {name}
                    </Card.Header>
                    <Card.Description>
                        {email}
                    </Card.Description>
                </Card.Content>
            </Card>
        </Layout>
    )
}
export default Profile;