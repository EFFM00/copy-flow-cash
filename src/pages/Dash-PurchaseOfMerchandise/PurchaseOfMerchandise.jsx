import { useDispatch, useSelector } from "react-redux";
import ContainerSections from "../../components/ContainerSections/ContainerSections"
import HeaderSection from "../../components/HeaderSection/HeaderSection";
import { changeToView } from "../../store/registrationFormSlice";
import { useEffect } from "react";
import FormPurchaseOfMerchandise from "./FormPurchaseOfMerchandise/FormPurchaseOfMerchandise";
import AuthLayout from "../../components/AuthLayout";
import { ADMIN, EMPLOYEE } from "../../constants/roles";

const PurchaseOfMerchandise = () => {

    const dispatch = useDispatch();

    const isViewMode = useSelector((state) => state.registrationForm.isView);

    useEffect(() => {
        dispatch(changeToView())
    }, [])

    return (
        <AuthLayout roles={[ADMIN, EMPLOYEE]}>
            <ContainerSections>
                <HeaderSection
                text="Compra de mercadería" 
                btnTextPrimary="Añadir registro" 
                btnTextSecondary="Ver todos los registros"
                />
                {
                    isViewMode ? (
                        <>Acá estará la tabla para visualizar todos los datos</>
                    ) : (
                        <FormPurchaseOfMerchandise/>
                    )
                }
            </ContainerSections>
        </AuthLayout>
    )
}

export default PurchaseOfMerchandise;