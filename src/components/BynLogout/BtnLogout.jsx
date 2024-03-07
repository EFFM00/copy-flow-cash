import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { logout } from "../../store/authSlice";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { Bounce, toast } from "react-toastify";
import { LogoutBtn } from "./styled";

const BtnLogout = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const authState = useSelector((state) => state.auth);
    const loginToken = authState.userData?.token;

    useEffect(() => {
        if(!loginToken) {
            navigate("/login");

            toast.warning("Debes iniciar sesión para ver el contenido", {
                position: "top-center",
                autoClose: 3000,
                limit: 1,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: true,
                progress: undefined,
                theme: "light",
                transition: Bounce,
            });
        }
    }, [loginToken])

    return <LogoutBtn onClick={() => dispatch(logout())}>Cerrar sesión</LogoutBtn>;
};

export default BtnLogout;
