import { useDispatch } from "react-redux";
import ContainerSections from "../../components/ContainerSections/ContainerSections"
import HeaderSection from "../../components/HeaderSection/HeaderSection";
import { changeToView } from "../../store/registrationFormSlice";
import { useEffect } from "react";
import AuthLayout from "../../components/AuthLayout";
import { ADMIN, EMPLOYEE } from "../../constants/roles";

const Collections = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(changeToView())
    }, [])

    return (
        <AuthLayout roles={[ADMIN, EMPLOYEE]}>
            <ContainerSections>
                <HeaderSection
                text="Cobranzas" 
                btnTextPrimary="Añadir registro" 
                btnTextSecondary="Ver todos los registros"
                />
            </ContainerSections>
        </AuthLayout>
    )
}

export default Collections;