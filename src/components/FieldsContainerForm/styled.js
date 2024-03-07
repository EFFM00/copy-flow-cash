import styled from "styled-components";

export const FieldsCont = styled.div`
    display: grid;
    column-gap: 2rem;
    row-gap: 1rem;
    justify-content: center;
    grid-template-columns: 1fr;

    @media (min-width: 768px) {
        grid-template-columns: repeat(2, 1fr);
        grid-auto-flow: row;
    }
`