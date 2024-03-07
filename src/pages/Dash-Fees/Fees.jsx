import { useDispatch, useSelector } from "react-redux";
import ContainerSections from "../../components/ContainerSections/ContainerSections"
import HeaderSection from "../../components/HeaderSection/HeaderSection";
import { changeToView } from "../../store/registrationFormSlice";
import { useEffect } from "react";
import FormFees from "./FormFees/FormFees";
import AuthLayout from "../../components/AuthLayout";
import { ADMIN, EMPLOYEE } from "../../constants/roles";
import { Table, Thead, Tr, Th, Tbody, Td } from "fixed-fixed-react-super-responsive-table";

const Fees = () => {

    const dispatch = useDispatch();

    const isViewMode = useSelector((state) => state.registrationForm.isView);

    useEffect(() => {
        dispatch(changeToView())
    }, [])

    return (
        <AuthLayout roles={[ADMIN, EMPLOYEE]}>
            <ContainerSections>
                <HeaderSection
                text="Honorarios" 
                btnTextPrimary="Añadir registro" 
                btnTextSecondary="Ver todos los registros"
                />
                {
                    isViewMode ? (
                        <>
                            <Table>
                                <Thead>
                                    <Tr>
                                        <Th>Remuneraciones</Th>
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
                        <FormFees/>
                    )
                }
            </ContainerSections>
        </AuthLayout>
    )
}

export default Fees;