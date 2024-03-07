import { BrowserRouter, Navigate, Outlet, Route, Routes } from "react-router-dom";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import MenuMobile from "./components/MenuMobile/MenuMobile";
import Dashboard from "./pages/Dashboard/Dashboard";
import HeaderDashboard from "./components/Header/Header"
import { DashboardWrapperCont, OutletCont } from "./App";
import MenuDesktop from "./components/MenuDesktop/MenuDesktop";
import useScreenSize from "./hooks/useScreenSize";
import MenuContent from "./components/Menu/Menu";
import PurchaseOfMerchandise from "./pages/Dash-PurchaseOfMerchandise/PurchaseOfMerchandise";
import SalesRegistry from "./pages/Dash-SalesRegistry/SalesRegistry";
import Collections from "./pages/Dash-Collections/Collections";
import OtherIncome from "./pages/Dash-OtherIncome/OtherIncome";
import SalesNotes from "./pages/Dash-SalesNotes/SalesNotes";
import Settings from "./pages/Dash-Settings/Settings";
import Fees from "./pages/Dash-Fees/Fees";
import Remunerations from "./pages/Dash-Remunerations/Remunerations";
import Taxes from "./pages/Dash-Taxes/Taxes";
import BankLoans from "./pages/Dash-BankLoans/BankLoans";
import RegularExpenses from "./pages/Dash-RegularExpenses/RegularExpenses";
import OtherExpenses from "./pages/Dash-OtherExpenses/OtherExpenses";
import Banks from "./pages/Dash-Banks/Banks";
import ClientAndVendorManagement from "./pages/Dash-ClientAndVendorManagement/ClientAndVendorManagement";
import CashFlow from "./pages/Dash-CashFlow/CashFlow";
import Wallet from "./pages/Dash-Wallet/Wallet";
import Permissions from "./pages/Dash-Permissions/Permissions";
import ProtectedLayout from "./routes/Protected";

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Navigate to="/login" />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />

                <Route path="/dashboard/*" element={<ProtectedLayout />}>
                    <Route index element={<Dashboard />}/>
                    <Route path="*" element={<>Status 404 - Not Found</>} />
                </Route>

                <Route path="/ingresos/*" element={<ProtectedLayout />}>
                    <Route path="" element={<>test</>}/>

                    <Route path="registro-ventas" element={<SalesRegistry />}/>
                    <Route path="cobranzas" element={<Collections />}/>
                    <Route path="notas-ventas" element={<SalesNotes />}/>
                    <Route path="otros-ingresos" element={<OtherIncome />}/>
                    <Route path="*" element={<>Status 404 - Not Found</>} />
                </Route>

                <Route path="/egresos/*" element={<ProtectedLayout />}>
                    <Route path="compra-mercaderia" element={<PurchaseOfMerchandise />}/>
                    <Route path="honorarios" element={<Fees />}/>
                    <Route path="remuneraciones" element={<Remunerations />}/>
                    <Route path="impuestos" element={<Taxes />}/>
                    <Route path="creditos-bancarios" element={<BankLoans />}/>
                    <Route path="gastos-recurrentes" element={<RegularExpenses />}/>
                    <Route path="otros-gastos" element={<OtherExpenses />}/>
                    <Route path="*" element={<>Status 404 - Not Found</>} />
                </Route>

                <Route path="/bancos/*" element={<ProtectedLayout />}>
                    <Route index element={<Banks />}/>
                    <Route path="*" element={<>Status 404 - Not Found</>} />
                </Route>

                <Route path="/reporteria/*" element={<ProtectedLayout />}>
                    <Route path="flujo-caja" element={<CashFlow />}/>
                    <Route path="billetera" element={<Wallet />}/>
                    <Route path="*" element={<>Status 404 - Not Found</>} />
                </Route>

                <Route path="/gestion-clientes/*" element={<ProtectedLayout />}>
                    <Route index element={<ClientAndVendorManagement />}/>
                    <Route path="*" element={<>Status 404 - Not Found</>} />
                </Route>

                <Route path="/ajustes/*" element={<ProtectedLayout />}>
                    <Route index element={<Settings/>}/>
                    <Route path="*" element={<>Status 404 - Not Found</>} />            
                </Route>

                <Route path="/permisos/*" element={<ProtectedLayout />}>
                    <Route index element={<Permissions/>}/>
                    <Route path="*" element={<>Status 404 - Not Found</>} />            
                </Route>
                <Route path="*" element={<>Status 404 - Not Found</>} />            
            </Routes>
        </BrowserRouter>
    );
}

export default App;
