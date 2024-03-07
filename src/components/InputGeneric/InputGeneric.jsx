import { Input } from "./styled";

const InputGeneric = ({ type, name, id, onChange, onBlur, placeholder, value }) => {
    return <Input 
    type={type}
    placeholder={placeholder}
    name={name} 
    id={id} 
    onChange={onChange}
    onBlur={onBlur}
    value={value}
    />;
};

export default InputGeneric;
