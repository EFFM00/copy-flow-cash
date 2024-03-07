import InputGeneric from "../InputGeneric/InputGeneric";
import Label from "../Label/Label";
import { FieldStyle } from "./styled";

const FieldGeneric = ({title, type, name, id, onChange, onBlur, placeholder, value=""}) => {
    return(
        <FieldStyle>
            <Label title={title} textFor={id}/>
            <InputGeneric type={type} name={name} id={id} onChange={onChange} onBlur={onBlur} placeholder={placeholder} value={value}/>
        </FieldStyle>
    );
}

export default FieldGeneric