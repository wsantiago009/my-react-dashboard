import styled from "styled-components";

export const Wrapper = styled.li`

    a {
        display:block;
        color:#fff;
        text-decoration:none;
        margin:2px 0;
        padding:10px 12px;
        opacity:0.75;
        font-size:15px;

        &:active,
        &:focus,
        &:hover {
            opacity:1;
            background-color:#2a2d32;
            border-radius:10px;
        }
    }
`;