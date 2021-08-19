import React from 'react';

// Style
import { Wrapper } from './MenuItem.style';

const MenuItem = ({ link, children }) => (
    <Wrapper>
        <a href={link}>
            {children}
        </a>
    </Wrapper>
)

export default MenuItem
