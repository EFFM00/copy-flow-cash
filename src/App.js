import styled from "styled-components";

export const DashboardWrapperCont = styled.div`
    display: grid;
    grid-template-columns: 1fr;

    @media (min-width: 768px) {
        grid-template-columns: 20rem 1fr;
    }
`

export const OutletCont = styled.div`
    background-color: #E7E7E7;
    grid-column: 1 / 2;

    @media (min-width: 768px) {
        grid-column: 2 / 3;    
    }
`