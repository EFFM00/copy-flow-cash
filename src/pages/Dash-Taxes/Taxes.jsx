import { useDispatch } from "react-redux";
import ContainerSections from "../../components/ContainerSections/ContainerSections";
import HeaderSection from "../../components/HeaderSection/HeaderSection";
import { useEffect } from "react";
import { changeToView } from "../../store/registrationFormSlice";
import AuthLayout from "../../components/AuthLayout";
import { ADMIN, EMPLOYEE } from "../../constants/roles";

const Taxes = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(changeToView())
    }, [])

    return (
        <AuthLayout roles={[ADMIN, EMPLOYEE]}>
            <ContainerSections>
                <HeaderSection
                text="Impuestos" 
                btnTextPrimary="Añadir registro" 
                btnTextSecondary="Ver todos los registros"
                />
            </ContainerSections>
        </AuthLayout>
    )
}

export default Taxes;