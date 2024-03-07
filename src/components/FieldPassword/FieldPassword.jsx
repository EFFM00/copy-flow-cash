import FieldGeneric from "../FieldGeneric/FieldGeneric";
import ShowPwd from "../../assets/eye-solid.svg";
import HiddenPwd from "../../assets/eye-slash-solid.svg";
import { BtnEye, ContainerFieldPassword, FieldStyle, Img } from "./styled";
import InputGeneric from "../InputGeneric/InputGeneric";
import Label from "../Label/Label";

const FieldPassword = ({
    title,
    name,
    id,
    onChange,
    onBlur,
    placeholder,
    conditionalType,
    onClickEye,
    value
}) => {
    return (
        <FieldStyle>
            <Label title={title} textFor={id}/>
            <ContainerFieldPassword>
                <InputGeneric
                    type={conditionalType ? "text" : "password"}
                    name={name}
                    id={id}
                    onChange={onChange}
                    onBlur={onBlur}
                    placeholder={placeholder}
                    value={value}
                />

                <BtnEye type="button" onClick={onClickEye} title={conditionalType ? "Ocultar contraseña" : "Mostrar contraseña"}>
                    <Img src={conditionalType ? HiddenPwd : ShowPwd} />
                </BtnEye>
            </ContainerFieldPassword>
        </FieldStyle>
    );
};

export default FieldPassword;
