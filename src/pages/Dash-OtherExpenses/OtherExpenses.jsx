import { useDispatch, useSelector } from "react-redux";
import ContainerSections from "../../components/ContainerSections/ContainerSections"
import HeaderSection from "../../components/HeaderSection/HeaderSection";
import { changeToView } from "../../store/registrationFormSlice";
import { useEffect } from "react";
import AuthLayout from "../../components/AuthLayout";
import { ADMIN, EMPLOYEE } from "../../constants/roles";
import FormOtherExpenses from "./FormOtherExpenses/FormOtherExpenses";
import { Table, Thead, Tr, Th, Tbody, Td } from "fixed-fixed-react-super-responsive-table";

const OtherExpenses = () => {

    const dispatch = useDispatch();

    const isViewMode = useSelector((state) => state.registrationForm.isView);

    useEffect(() => {
        dispatch(changeToView())
    }, [])

    return (
        <AuthLayout roles={[ADMIN, EMPLOYEE]}>
            <ContainerSections>
                <HeaderSection
                text="Otros gastos" 
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
                                        <Th>Categoría</Th>
                                        <Th>Tipo Gasto</Th>
                                        <Th>Centro Costo</Th>
                                        <Th>Fecha</Th>
                                        <Th>Nro. Documento</Th>
                                        <Th>Monto</Th>
                                        <Th>Detalle</Th>
                                        <Th>Acciones</Th>
                                    </Tr>
                                </Thead>
                                <Tbody>
                                    <Tr>
                                        <Td>Tablescon</Td>
                                        <Td>9 April 2019</Td>
                                        <Td>East Annex</Td>
                                        <Td>Tablescon</Td>
                                        <Td>9 April 2019</Td>
                                        <Td>East Annex</Td>
                                        <Td>East Annex</Td>
                                        <Td>East Annex</Td>
                                    </Tr>
                                </Tbody>
                            </Table>
                            
                        </>



                    ) : (
                        <FormOtherExpenses/>
                    )
                }
            </ContainerSections>
        </AuthLayout>
    )
}

export default OtherExpenses;