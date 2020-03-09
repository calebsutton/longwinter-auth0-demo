import React, { FunctionComponent } from 'react';

import { Segment, Button } from 'semantic-ui-react';

import { useAuth0 } from '../utilities/react-auth0'

const SessionManager: FunctionComponent = () => {
    const { loading, isAuthenticated, loginWithRedirect, logout } = useAuth0();

    return (
        <Segment>
            {loading 
                ? <Button>Loading</Button>
                :
                    <Button.Group floated='right'>
                        {isAuthenticated
                            ? <Button onClick={() => logout()}>Logout</Button> 
                            : <Button onClick={() => loginWithRedirect()}>Login</Button>}
                    </Button.Group>
            }
        </Segment>
    )
}

export default SessionManager;