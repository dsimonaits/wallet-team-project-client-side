import { Routes, Route, useNavigate, useLocation } from "react-router-dom";
import { useEffect } from "react";
import mediaQueries from "utils/media";
import { useMediaQuery } from "@mui/material";
import LoginPage from "../pages/auth/LoginPage";
import RegistrationPage from "../pages/auth/RegistrationPage";
import Table from "./Table/Table";
import { Statistics } from "./Statistics/Statistics";
import Currency from "./Currency/Currency";
import DashboardPage from "pages/DashboardPage/DashboardPage";
import Spinner from "./Spinner/Spinner";

export const App = () => {
  const isMobile = useMediaQuery(mediaQueries.mobile);
  const location = useLocation();
  const navigate = useNavigate();
  useEffect(() => {
    if (!isMobile && location.pathname === "/home/currency") {
      navigate("/home");

    }
    if (location.pathname === "/") {
      navigate("/home");
    }
  }, [isMobile, navigate, location.pathname]);

  return (
    <>
      <Spinner />
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/registration" element={<RegistrationPage />} />
      <Route path="/" element={<DashboardPage />}>
        {isMobile && <Route path="currency" element={<Currency />} />}
        <Route path="home" element={<Table />} />
        <Route path="diagram" element={<Statistics />} />
      </Route>
    </Routes>
    </>
  );
};