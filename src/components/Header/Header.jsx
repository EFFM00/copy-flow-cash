import { useDispatch } from "react-redux";
import MenuIcon from "../../assets/bars-solid.svg"
import { ImgIcon, NavBar } from "./styled";
import { handlerMenu } from "../../store/menuSlice";
import BtnLogout from "../BynLogout/BtnLogout";
import useScreenSize from "../../hooks/useScreenSize";

const HeaderDashboard = () => {

    const { width } = useScreenSize();
    const dispatch = useDispatch();

    return (
        <NavBar>
            <ImgIcon
                src={MenuIcon}
                onClick={() => dispatch(handlerMenu())}
            />
            {width > 768 && <BtnLogout/>}
        </NavBar>
    );
};

export default HeaderDashboard;
