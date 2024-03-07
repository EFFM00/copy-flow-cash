import { Select } from "./styled";

const SelectGeneric = ({name, id, onChange, onBlur, placeholder, value, options }) => {
    return <Select 
    placeholder={placeholder}
    name={name} 
    id={id} 
    onChange={onChange}
    onBlur={onBlur}
    value={value}
    >
        {
            options.map(op => <option value={op.value}>{op.text}</option>)
        }
    </Select>;
};

export default SelectGeneric;
