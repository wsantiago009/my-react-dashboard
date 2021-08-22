import React from 'react';
import { InlineIcon } from '@iconify/react';
import { Link } from 'react-router-dom';

// Style
import { Wrapper } from './MenuItem.style';

const MenuItem = ({ icon, link, title }) => (
    <Wrapper>
        <Link to={link}>
            <InlineIcon className='icons' icon={icon} />
            {title}
        </Link>
    </Wrapper>
)

export default MenuItem
