import React, { FunctionComponent } from 'react';
import { useAuth0 } from "../utilities/react-auth0";

import Layout from '../parts/Layout'

const Profile: FunctionComponent = () => {
    const {loading, user} = useAuth0();

    return !loading && user ? (
        <Layout>
            {user.name}
            {user.email}
        </Layout>
    ) : (
        <Layout>
            Loading..
        </Layout>
    )
}


export default Profile;