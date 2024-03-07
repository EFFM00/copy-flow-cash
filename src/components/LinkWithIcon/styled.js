import styled from "styled-components";

export const ContBtn = styled.button`
    display: flex;
    justify-content: space-between; 
    align-items: center;
    gap: 0.5rem;
    cursor: pointer;
    background: none;
    border: none;
    font-size: 1rem;
`

export const PlusIcon = styled.img`
    width: 2rem;

    @media (min-width: 768px) {
        width: 1.6rem;
    }
`
