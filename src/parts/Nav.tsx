import React, { FunctionComponent } from 'react';
import { Link } from 'react-router-dom'

import { Menu } from 'semantic-ui-react';

import { useAuth0 } from '../utilities/react-auth0'

const Nav: FunctionComponent = () => {
    const { loading, isAuthenticated, loginWithRedirect, logout } = useAuth0();

    return (
        <Menu pointing secondary>
            <Menu.Item>
                <Link to='/'>Home</Link>
            </Menu.Item>
            <Menu.Item>
                <Link to='/profile'>Profile</Link>
            </Menu.Item>
            {loading 
                ? <Menu.Item position='right'><a>Loading</a></Menu.Item>
                : <>
                    {isAuthenticated
                        ? <Menu.Item position='right' onClick={() => logout()}><a>Logout</a></Menu.Item>
                        : <Menu.Item position='right' onClick={() => loginWithRedirect()}><a>Login</a></Menu.Item>
                    }
                </>
            }
        </Menu>
    )
}

export default Nav;