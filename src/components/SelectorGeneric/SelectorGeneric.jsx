import Label from "../Label/Label";
import SelectGeneric from "../SelectGeneric/SelectGeneric";
import { FieldStyle } from "./styled";

const SelectorGeneric = ({title, name, id, onChange, onBlur, placeholder, options, value=""}) => {
    return(
        <FieldStyle>
            <Label title={title} textFor={id}/>
            <SelectGeneric name={name} id={id} onChange={onChange} onBlur={onBlur} placeholder={placeholder} value={value} options={options}/>
        </FieldStyle>
    );
}

export default SelectorGeneric