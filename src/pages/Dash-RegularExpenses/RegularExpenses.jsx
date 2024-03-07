import { useDispatch, useSelector } from "react-redux";
import ContainerSections from "../../components/ContainerSections/ContainerSections"
import HeaderSection from "../../components/HeaderSection/HeaderSection";
import { changeToView } from "../../store/registrationFormSlice";
import { useEffect } from "react";
import FormRegularExpenses from "./FormRegularExpenses/FormRegularExpenses";
import AuthLayout from "../../components/AuthLayout";
import { ADMIN, EMPLOYEE } from "../../constants/roles";

const RegularExpenses = () => {

    const dispatch = useDispatch();

    const isViewMode = useSelector((state) => state.registrationForm.isView);

    useEffect(() => {
        dispatch(changeToView())
    }, [])

    return (
        <AuthLayout roles={[ADMIN, EMPLOYEE]}>
            <ContainerSections>
                <HeaderSection
                text="Gastos recurrentes" 
                btnTextPrimary="Añadir registro" 
                btnTextSecondary="Ver todos los registros"
                />
                {
                    isViewMode ? (
                        <>Acá estará la tabla para visualizar todos los datos</>
                    ) : (
                        <FormRegularExpenses/>
                    )
                }
            </ContainerSections>
        </AuthLayout>
    )
}

export default RegularExpenses;