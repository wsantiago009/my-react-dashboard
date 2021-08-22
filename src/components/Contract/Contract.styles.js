import styled from "styled-components";

export const Wrapper = styled.div`
    background-color:#fafbfc;
    border-radius:15px;

    &:not(:last-child) {
        margin-bottom:20px;
    }

    > * {
        padding:20px 25px;

        &:first-child {
            border-bottom:1px solid #ccc;
        }
    }

    h4 {
        font-weight:700;
        margin:0;
    }

    span {
        display:block;
        color:#a2abbe;
        margin:3px 0;
    }

    .dright {
        margin:0 0 0 auto;
        text-align:right;
    }

    .companyLogo {
        max-width:50px;
        margin-right:20px;
    }

    .companyContainer {
        width:100%;
        max-width:400px;
    }

    .price {
        color:#0d6ee0;
    }
`;