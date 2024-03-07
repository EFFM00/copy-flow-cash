import AuthLayout from "../../components/AuthLayout";
import ContainerSections from "../../components/ContainerSections/ContainerSections";
import TitleSection from "../../components/TitleSection/TitleSection";
import { ADMIN, EMPLOYEE } from "../../constants/roles"

const Dashboard = () => {
    return (
        <AuthLayout roles={[ADMIN, EMPLOYEE]}>
            <ContainerSections>
                <TitleSection text={"Dashboard"} ubication="left"/>
                <p>Acá irá el dashboard</p>
            </ContainerSections>
        </AuthLayout>
    );
}

export default Dashboard;
