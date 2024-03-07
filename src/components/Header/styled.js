import { styled } from "styled-components";

export const ImgIcon = styled.img`
    display: block;
    width: 1.3rem;
    @media (min-width: 768px) {
        display: none;
    }
`

export const NavBar = styled.nav`
    height: 2.8rem;
    cursor: pointer;
    width: 100%;
    background-color: #3b3b3b;
    display: flex;
    align-items: center;
    padding: 0.8rem;
    justify-content: end;
    position: sticky;
    top: 0;
    z-index: 999;
`