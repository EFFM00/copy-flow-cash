import {
    H2Menu,
    ImgIcon,
    LinkNested,
    LinkTitle,
    MenuStyle,
    SectionMenu,
} from "./styled";

import ChartIcon from "../../assets/chart-line-solid.svg";
import ChartIconSelected from "../../assets/chart-line-solid-selected.svg";
import BankIcon from "../../assets/building-columns-solid.svg";
import BankIconSelected from "../../assets/building-columns-solid-selected.svg";
import UserIcon from "../../assets/user-solid.svg";
import UserIconSelected from "../../assets/user-solid-selected.svg";
import SettingIcon from "../../assets/gear-solid.svg";
import SettingIconSelected from "../../assets/gear-solid-selected.svg";
import ArrowOpen from "../../assets/chevron-down-solid.svg";
import ArrowClosed from "../../assets/chevron-right-solid.svg";
import LockIcon from "../../assets/lock-solid.svg";
import LockIconSelected from "../../assets/lock-solid-selected.svg";
import { useDispatch } from "react-redux";
import { close } from "../../store/menuSlice";
import { useEffect, useState } from "react";
import DropdownMenu from "../DropdownMenu/DropdownMenu";
import BtnLogout from "../BynLogout/BtnLogout";
import useScreenSize from "../../hooks/useScreenSize";

const MenuContent = () => {
    const dispatch = useDispatch();
    const { width } = useScreenSize();
    const [currentPath, setCurrentPath] = useState(window.location.pathname);
    const [openSections, setOpenSections] = useState({
        dashboard: true,
        ingresos: true,
        egresos: true,
        reporteria: true
    });

    const toggleSection = (section) => {
        setOpenSections(prevState => ({
          ...prevState,
          [section]: !prevState[section]
        }));
      };

    useEffect(() => {
        setCurrentPath(window.location.pathname);
    }, [window.location.pathname]);

    useEffect(() => {
        console.log("currentPath", currentPath);
    }, [currentPath]);

    const isSelectedSection = (pathClicked) => {
        return pathClicked === currentPath;
    };

    return (
        <MenuStyle>
            <LinkTitle 
            $is_selected={isSelectedSection("/dashboard")}
            to="/dashboard"
            onClick={() => {dispatch(close())}}>
                <ImgIcon src={isSelectedSection("/dashboard") ? ChartIconSelected : ChartIcon} /> Movimientos
            </LinkTitle>

            <SectionMenu>
                <H2Menu
                onClick={() => {toggleSection("ingresos")}}><ImgIcon src={openSections["ingresos"] ? ArrowOpen : ArrowClosed}/> Ingresos</H2Menu>
                <DropdownMenu isOpen={openSections["ingresos"]}>
                    <LinkNested
                        $is_selected={isSelectedSection(
                            "/ingresos/registro-ventas"
                        )}
                        to="/ingresos/registro-ventas"
                        onClick={() => dispatch(close())}
                    >
                        Registro de ventas
                    </LinkNested>

                    <LinkNested
                        $is_selected={isSelectedSection("/ingresos/cobranzas")}
                        to="/ingresos/cobranzas"
                        onClick={() => dispatch(close())}
                    >
                        Cobranzas
                    </LinkNested>

                    <LinkNested
                        $is_selected={isSelectedSection("/ingresos/notas-ventas")}
                        to="/ingresos/notas-ventas"
                        onClick={() => dispatch(close())}
                    >
                        Notas de venta
                    </LinkNested>

                    <LinkNested
                        $is_selected={isSelectedSection("/ingresos/otros-ingresos")}
                        to="/ingresos/otros-ingresos"
                        onClick={() => dispatch(close())}
                    >
                        Otros ingresos
                    </LinkNested>
                </DropdownMenu>
            </SectionMenu>

            <SectionMenu>
                <H2Menu            
                onClick={() => {toggleSection("egresos")}}>
                    <ImgIcon src={openSections["egresos"] ? ArrowOpen : ArrowClosed}/> Egresos
                </H2Menu>
                <DropdownMenu isOpen={openSections["egresos"]}>
                    <LinkNested
                        $is_selected={isSelectedSection("/egresos/compra-mercaderia")}
                        to="/egresos/compra-mercaderia"
                        onClick={() => dispatch(close())}
                    >
                        Compra de mercadería
                    </LinkNested>

                    <LinkNested
                        $is_selected={isSelectedSection("/egresos/honorarios")}
                        to="/egresos/honorarios"
                        onClick={() => dispatch(close())}
                    >
                        Honorarios
                    </LinkNested>
                    
                    <LinkNested
                        $is_selected={isSelectedSection("/egresos/remuneraciones")}
                        to="/egresos/remuneraciones"
                        onClick={() => dispatch(close())}
                    >
                        Remuneraciones
                    </LinkNested>

                    <LinkNested
                        $is_selected={isSelectedSection("/egresos/impuestos")}
                        to="/egresos/impuestos"
                        onClick={() => dispatch(close())}
                    >
                        Impuestos
                    </LinkNested>

                    <LinkNested
                        $is_selected={isSelectedSection("/egresos/creditos-bancarios")}
                        to="/egresos/creditos-bancarios"
                        onClick={() => dispatch(close())}
                    >
                        Créditos bancarios
                    </LinkNested>

                    <LinkNested
                        $is_selected={isSelectedSection("/egresos/gastos-recurrentes")}
                        to="/egresos/gastos-recurrentes"
                        onClick={() => dispatch(close())}
                    >
                        Gastos recurrentes
                    </LinkNested>
                    
                    <LinkNested
                        $is_selected={isSelectedSection("/egresos/otros-gastos")}
                        to="/egresos/otros-gastos"
                        onClick={() => dispatch(close())}
                    >
                        Otros gastos
                    </LinkNested>
                </DropdownMenu>
            </SectionMenu>

            <LinkTitle 
            $is_selected={isSelectedSection("/bancos")}
            to="/bancos" 
            onClick={() => dispatch(close())}
            >
                <ImgIcon src={isSelectedSection("/bancos") ? BankIconSelected : BankIcon} /> Bancos
            </LinkTitle>

            <SectionMenu>
                <H2Menu
                onClick={() => {toggleSection("reporteria")}}>
                    <ImgIcon src={openSections["reporteria"] ? ArrowOpen : ArrowClosed}/> Reportería
                </H2Menu>
                <DropdownMenu isOpen={openSections["reporteria"]}>
                    <LinkNested
                        $is_selected={isSelectedSection("/reporteria/flujo-caja")}
                        to="/reporteria/flujo-caja"
                        onClick={() => dispatch(close())}
                    >
                        Flujo de caja
                    </LinkNested>
                    <LinkNested
                        $is_selected={isSelectedSection("/reporteria/billetera")}
                        to="/reporteria/billetera"
                        onClick={() => dispatch(close())}
                    >
                        Billetera
                    </LinkNested>
                </DropdownMenu>
            </SectionMenu>

            <LinkTitle 
            $is_selected={isSelectedSection("/gestion-clientes")}
            to="/gestion-clientes" 
            onClick={() => dispatch(close())}>
                <ImgIcon src={isSelectedSection("/gestion-clientes") ? UserIconSelected : UserIcon} /> Gestión de clientes y proveedores
            </LinkTitle>

            <LinkTitle 
            $is_selected={isSelectedSection("/ajustes")}
            to="/ajustes" 
            onClick={() => dispatch(close())}>
                <ImgIcon src={isSelectedSection("/ajustes") ? SettingIconSelected : SettingIcon} /> Ajustes
            </LinkTitle>

            <LinkTitle 
            $is_selected={isSelectedSection("/permisos")}
            to="/permisos" 
            onClick={() => dispatch(close())}>
                <ImgIcon src={isSelectedSection("/permisos") ? LockIconSelected : LockIcon} /> Permisos
            </LinkTitle>

            {width <= 768 && <BtnLogout/>}
        </MenuStyle>
    );
};

export default MenuContent;
