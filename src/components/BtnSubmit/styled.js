import { styled } from "styled-components";

export const Btn = styled.button`
    font-family: 'Roboto', sans-serif;
    font-weight: 500;
    color: ${props => props.$colortext ?? "black"};
    align-self: ${props => props.$ubication};
    width: 100%;
    background-color: ${props => props.$colorback};
    padding: 0.6rem;
    border-radius: 5px;
    /* border: 1px solid black; */
    border: none;
    transition: background-color 0.12s ease, color 0.12s ease;
    font-size: 1rem;
    font-weight: 600;

    @media (min-width: 768px) {
        width: 15rem;
    }

    &:hover {
        background-color: #32bf79;
        color: black;
        cursor: pointer;
    }

    &:active {
        background-color: #51647a;
    }

    &:disabled {
        cursor: not-allowed;
        background-color: #e0e0e0;
    }
`