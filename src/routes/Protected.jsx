import React, { useEffect, useState } from "react";
import HeaderDashboard from "../components/Header/Header";
import { DashboardWrapperCont, OutletCont } from "../App";
import MenuByWidth from "../components/MenuByWidth/MenuByWidth";
import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import { useNavigate } from "react-router-dom";


const ProtectedLayout = () => {
    const authToken = useSelector((state) => state.auth.userData);
    const [loader, setLoader] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        if (!authToken?.token) {
            navigate("/login")
        }
        setLoader(false);
    }, [authToken]);

    return loader ? (
        "Cargando..."
    ) : (
        <>
            <HeaderDashboard />
            <DashboardWrapperCont>
                <MenuByWidth />
                <OutletCont>
                    <Outlet />
                </OutletCont>
            </DashboardWrapperCont>
        </>
    );
};

export default ProtectedLayout;
