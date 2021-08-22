import styled from "styled-components";

export const Wrapper = styled.div`
    position:relative;

    .inputIcon {
        position:absolute;
        bottom: 50%;
        margin-bottom: -8px;
        left:10px;
        color:#aaa;
    }

    input {
        padding:10px 30px;
        ${({ icon }) => icon && `
        padding-left:40px;
        `}
        border:none;
        background-color:#fafbfc;
        border-radius:5px;
        width:100%;
        max-width:300px;
    }
`;