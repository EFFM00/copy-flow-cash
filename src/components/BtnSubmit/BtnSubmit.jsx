import { Btn } from "./styled";

const BtnSubmit = ({disabled=false, text, type, onClick, color, colorText, ubication}) => {
    return (
        <Btn 
        type={type} 
        onClick={onClick} 
        $colorback={color} 
        $colortext={colorText}
        $ubication={ubication}
        aria-label={text}
        title={text}
        disabled={disabled}
        >{text}</Btn>
    );
}

export default BtnSubmit;