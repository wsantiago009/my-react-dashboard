import React from 'react';

// Components
import InputField from '../InputField/InputField';

// Styles
import { Wrapper, SearchWrapper, GreetingWrapper } from './Header.styles';

const Header = ({ name }) => (
    <Wrapper>
        <SearchWrapper>
            <InputField 
                icon='whh:magnifier'
                type='text'
                name='search'
                placeholder='Search all contact'
            />
        </SearchWrapper>
        <GreetingWrapper>
            <h2>Good day, {name}</h2>
            <h5>Welcome back!</h5>
        </GreetingWrapper>
    </Wrapper>
);

export default Header
