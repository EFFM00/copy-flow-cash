import { FormCont } from "./styled";

const FormGeneric = ({children, onSubmit}) => {
    return (
        <FormCont onSubmit={onSubmit}>
            {children}
        </FormCont>
    )
};

export default FormGeneric;