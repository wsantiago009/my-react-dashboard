import React from 'react';
import { Icon } from '@iconify/react';

// Style
import { Wrapper } from './InputField.styles';

const InputField = ({ type, name, icon, value, placeholder }) => (
    <Wrapper icon={icon}>
        <Icon className='inputIcon' icon={icon} />
        <input 
            type={type}
            name={name}
            value={value}
            placeholder={placeholder}
        />
    </Wrapper>
);

export default InputField;
