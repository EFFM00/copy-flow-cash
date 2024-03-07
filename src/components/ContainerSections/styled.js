import styled from "styled-components";

export const ContainerSect = styled.div`
    min-height: calc(100vh - 2.8rem);
    padding: 1rem;
    display: flex;
    flex-direction: column;
    gap: 2rem;

    @media (min-width: 768px) {
        padding: 1.8rem 1.5rem;
    }
`