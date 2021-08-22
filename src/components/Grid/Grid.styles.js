import styled from "styled-components";

export const RowWrapper = styled.div``;

export const ColWrapper = styled.div`
    padding:15px;
    flex: ${({ size }) => size};
`;

export const WrapperBackground = styled.div`
    background-color:${({ backgroundColor }) => backgroundColor};
    padding:25px;
    border-radius:15px;
`;