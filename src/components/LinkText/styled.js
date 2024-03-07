import { Link } from "react-router-dom";
import { styled } from "styled-components";

export const LinkTo = styled(Link)`
    font-family: 'Roboto', sans-serif;
    text-align: ${props => props.$ubication};
    width: fit-content;

    &:hover {
        color: purple;
        cursor: pointer;
    }
`