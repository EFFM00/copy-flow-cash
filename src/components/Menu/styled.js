import { Link } from "react-router-dom";
import { styled } from "styled-components";

export const MenuStyle = styled.aside`
    margin: 1.5rem;
    overflow-wrap: break-word;
    display: flex;
    flex-direction: column;
    gap: 2rem;
`

export const LinkTitle = styled(Link)`
    display: block;
    color: ${props => props.$is_selected ? "#74E291": "#fff"};
    text-decoration: none;
    font-weight: 500;
    font-size: 1.5rem;

    &:hover {
        color: #74E291;
    }
`;

export const LinkNested = styled(Link)`
    display: block;
    color: ${props => props.$is_selected ? "#74E291" : "#fff"};
    text-decoration: none;
    font-weight: 500;
    font-size: 1.2rem;
    transition: color 0.2s ease;

    &:hover {
        color: #74E291;
    }
`;

export const H2Menu = styled.h2`
    font-style: italic;
    display: block;
    color: #fff;
    text-decoration: none;
    font-weight: 500;
    font-size: 1.4rem;

    &:hover {
        cursor: pointer;
    }
`;

export const SectionMenu = styled.section`
    display: flex;
    flex-direction: column;
    gap: 1rem;
`

export const ImgIcon = styled.img`
    width: 1rem;
    height: 1rem;
`