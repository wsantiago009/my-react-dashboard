import React from 'react';
import { RowWrapper } from './Grid.styles';

const Row = ({ children }) => (
    <RowWrapper className='dflex'>
        {children}
    </RowWrapper>
);

export default Row;
