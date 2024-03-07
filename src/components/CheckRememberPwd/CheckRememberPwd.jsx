import Checkbox from "../Checkbox/Checkbox";
import { Container } from "./styled";

const CheckRememberPwd = ({id="", value, title, onClick, checked=false}) => {
    return (
        <Container>
            <Checkbox id={id} value={value} onClick={onClick} checked={checked}/>
            <p>{title}</p>
        </Container>
    )
};

export default CheckRememberPwd;
