import TitleSection from "../../components/TitleSection/TitleSection";
import ContainerSections from "../../components/ContainerSections/ContainerSections"
import FormGeneric from "../../components/FormGeneric/FormGeneric";
import React from 'react';
import AuthLayout from "../../components/AuthLayout";
import TableExample from "../../components/Table/Table";
import { ADMIN } from "../../constants/roles";


const Permissions = () => {

    return (
        <AuthLayout roles={[ADMIN]}>
            <ContainerSections>
                <TitleSection text="Permisos de usuario" ubication="left"/>
                <TableExample/>

                {/* <Table columns={columns} data={data} /> */}
            </ContainerSections>
        </AuthLayout>
    )
}

export default Permissions;