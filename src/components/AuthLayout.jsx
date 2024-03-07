import { useSelector } from "react-redux";

const AuthLayout = ({ children, roles = [] }) => {
    const authState = useSelector((state) => state.auth)
    const authUserRole = authState?.userData?.data?.userRole;

    return (
        roles.length > 0 && roles.includes(authUserRole)
        ? (
            <>{children}</>
        ) : (
            <>404 Not found</>
        )
    )
};

export default AuthLayout;
