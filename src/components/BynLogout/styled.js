import { styled } from "styled-components";

export const LogoutBtn = styled.button`
    padding: 0.3rem 0.5rem;
    cursor: pointer;
    background-color: transparent;
    border: 3px solid #fff;    
    color: #fff;
    font-weight: 600;
    border-radius: 5px;
    font-size: 0.9rem;

    &:hover {
        background-color: #32bf79;
        cursor: pointer;
    }

    &:active {
        cursor: wait;
    }
`