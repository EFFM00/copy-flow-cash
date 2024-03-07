import { styled } from "styled-components";

export const MenuContainer = styled.div`
    height: calc(100vh - 2.8rem);
    top: 2.8rem;
    background-color: #616161;
    max-width: 20rem;
    width: 95%;
    transform: translateX(${props => (props.$is_open ? '0' : '-100%')});
    transition: transform 0.3s ease-in-out;
    box-shadow: rgba(0, 0, 0, 0.25) 0px 25px 50px -12px;
    overflow-y: scroll;
    position: fixed;
    z-index: 999;
`

export const NavContainer = styled.div`
    position: fixed;
    top: 0;
`