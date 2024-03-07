import { Input } from "./styled";

const Checkbox = ({id, value, onClick, checked}) => {
    return <Input type="checkbox" id={id} value={value} onChange={onClick} checked={checked}/>
};

export default Checkbox;
