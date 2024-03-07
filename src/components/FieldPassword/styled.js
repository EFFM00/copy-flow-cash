import { styled } from "styled-components";

export const FieldStyle = styled.article`
    font-family: 'Roboto', sans-serif;
    display: flex;
    flex-direction: column;
    gap: 0.2rem;
    width: 100%;
`

export const BtnEye = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: transparent;
    border: none;
    margin: 0 0 0 0.5rem;
    cursor: pointer;
`;
export const ContainerFieldPassword = styled.div`
    display: grid;
    grid-template-columns: 1fr auto;
    align-items: center;
`;

export const Img = styled.img`
    width: 2rem;
`