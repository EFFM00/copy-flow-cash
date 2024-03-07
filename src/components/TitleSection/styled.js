import styled from "styled-components";

export const Title = styled.h1`
    color: #2e2e2e;
    font-family: 'Roboto', sans-serif;
    text-align: ${props => props.$ubication};
    font-size: 1.5rem;
    font-weight: 600;

    @media (min-width: 768px) {
        font-size: 2rem;
    }
`