import { styled } from "styled-components";

export const MenuContainer = styled.div`
    height: calc(100vh - 2.8rem);
    top: 2.8rem;
    background-color: #616161;
    width: 20rem;
    transition: transform 0.3s ease-in-out;
    box-shadow: rgba(0, 0, 0, 0.25) 0px 25px 50px -12px;
    overflow-y: scroll;
    position: fixed;
    grid-column: 1 / 2;
    z-index: 999;
`