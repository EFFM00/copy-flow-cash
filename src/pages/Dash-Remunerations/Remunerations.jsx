import { useDispatch, useSelector } from "react-redux";
import ContainerSections from "../../components/ContainerSections/ContainerSections"
import HeaderSection from "../../components/HeaderSection/HeaderSection";
import { changeToView } from "../../store/registrationFormSlice";
import { useEffect } from "react";
import FormRemunerations from "./FormRemunerations/FormRemunerations";
import AuthLayout from "../../components/AuthLayout";
import { ADMIN, EMPLOYEE } from "../../constants/roles";
import { Table, Thead, Tr, Th, Tbody, Td } from "fixed-fixed-react-super-responsive-table";

const Remunerations = () => {

    const dispatch = useDispatch();

    const isViewMode = useSelector((state) => state.registrationForm.isView);

    useEffect(() => {
        dispatch(changeToView())
    }, [])

    return (
        <AuthLayout roles={[ADMIN, EMPLOYEE]}>
            <ContainerSections>
                <HeaderSection
                text="Remuneraciones" 
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
                                        <Th>Fecha pago</Th>
                                        <Th>Anticipo</Th>
                                        <Th>Funcionario</Th>
                                        <Th>RUT</Th>
                                        <Th>Sueldo</Th>
                                        <Th>Costo total</Th>
                                        <Th>D014 - Anticipo de sueldos</Th>
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
                        <FormRemunerations/>
                    )
                }
            </ContainerSections>
        </AuthLayout>
    )
}

export default Remunerations;