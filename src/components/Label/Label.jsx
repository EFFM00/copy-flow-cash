import { LabelStyle } from "./styled";

const Label = ({title, textFor}) => {
    return <LabelStyle htmlFor={textFor}>{title}</LabelStyle>
}

export default Label;