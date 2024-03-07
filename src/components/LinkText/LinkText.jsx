import { LinkTo } from "./styled"

const LinkText = ({text, path, ubication}) => {
    return <LinkTo $ubication={ubication} to={path}>{text}</LinkTo>
}

export default LinkText