import { useDispatch, useSelector } from "react-redux";
import ContainerSections from "../../components/ContainerSections/ContainerSections"
import HeaderSection from "../../components/HeaderSection/HeaderSection";
import { changeToView } from "../../store/registrationFormSlice";
import { useEffect } from "react";
import FormBankLoans from "./FormBankLoans/FormBankLoans";
import AuthLayout from "../../components/AuthLayout";
import { ADMIN, EMPLOYEE } from "../../constants/roles";
import { Table, Thead, Tr, Th, Tbody, Td } from "fixed-fixed-react-super-responsive-table";

const BankLoans = () => {

    const dispatch = useDispatch();

    const isViewMode = useSelector((state) => state.registrationForm.isView);

    useEffect(() => {
        dispatch(changeToView())
    }, [])

    return (
        <AuthLayout roles={[ADMIN, EMPLOYEE]}>
            <ContainerSections>
                <HeaderSection 
                text="Créditos bancarios" 
                btnTextPrimary="Añadir registro" 
                btnTextSecondary="Ver todos los registros"
                />
                {
                    isViewMode ? (
                        <>
                            <Table>
                                <Thead>
                                    <Tr>
                                        <Th>Id</Th>
                                        <Th>Banco</Th>
                                        <Th>Tipo de crédito</Th>
                                        <Th>Categoría crédito</Th>
                                        <Th>Vencimiento</Th>
                                        <Th>Total a pagar</Th>
                                        <Th>Interés</Th>
                                        <Th>Observaciones</Th>
                                        <Th>Cuotas</Th>
                                        <Th>Acciones</Th>
                                    </Tr>
                                </Thead>
                                <Tbody>
                                    <Tr>
                                        <Td>Tablescon</Td>
                                        <Td>East Annex</Td>
                                    </Tr>
                                </Tbody>
                            </Table>
                        </>
                    ) : (
                        <FormBankLoans/>
                    )
                }
            </ContainerSections>
        </AuthLayout>
    )
}

export default BankLoans;