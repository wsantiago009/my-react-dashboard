import React from 'react';

// Styles
import { Wrapper } from './MenuContainer.styles';

const MenuContainer = ({title, children}) => (
    <Wrapper>
        <h5>{title}</h5>
        <ul className='list-style'>
            {children}
        </ul>
    </Wrapper>
);

export default MenuContainer
