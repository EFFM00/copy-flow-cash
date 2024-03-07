import { useEffect } from "react";
import { MenuContainer } from "./styled";
import useScreenSize from "../../hooks/useScreenSize";
import { useDispatch, useSelector } from "react-redux";
import { close } from "../../store/menuSlice";

const MenuDesktop = ({children}) => {

    const dispatch = useDispatch();
    const menuIsOpen = useSelector((state) => state.menu.isOpen);
    const {width} = useScreenSize();

    useEffect(() => {
        width <= 768 && dispatch(close());
    }, [width]);

    return (
        <MenuContainer $is_open={menuIsOpen}>
            {children}
        </MenuContainer>
    )
}

export default MenuDesktop;