import React, { FunctionComponent } from 'react';
import Helmet from 'react-helmet';

import { Header } from 'semantic-ui-react';

interface HeadProps {
    title: string;
}

const Head: FunctionComponent<HeadProps> = ({title}) => (
    <>
        <Helmet>
            <title>{title}</title>
        </Helmet>
        <Header size='large'>{title}</Header>
    </>
)

export default Head;