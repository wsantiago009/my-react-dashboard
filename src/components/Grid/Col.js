import React from 'react';
import { ColWrapper, WrapperBackground } from './Grid.styles';

const Col = ({ size, backgroundColor, children }) => (
    <>
        { backgroundColor ? (
            <ColWrapper size={size}>
                <WrapperBackground backgroundColor={backgroundColor}>
                    {children}
                </WrapperBackground>
            </ColWrapper>
        ) : (
            <ColWrapper size={size}>
                {children}
            </ColWrapper>
        )}
    </>
);

export default Col;
