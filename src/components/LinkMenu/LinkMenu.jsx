import { LinkCont } from "./styled"

const LinkMenu = ({path, text}) => {
    return (
        <LinkCont to={path}>
            {text}
        </LinkCont>
    )
}

export default LinkMenu;