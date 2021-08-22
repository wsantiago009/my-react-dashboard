import React from 'react';

// Style
import { Wrapper } from './Container.styles';

const Container = ({ children }) => (
    <Wrapper>
        {children}
    </Wrapper>
);

export default Container
