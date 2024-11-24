import { createBrowserRouter } from "react-router-dom";
import LoginPage from "../pages/LoginPage";
import Dashboard from "../pages/Dashboard"; 
import Layout from "../layout/Layout"; 
import PatientList from "../pages/PatientList";
import Patient from "../pages/Patient";

export const router = createBrowserRouter([
    {
        path: "/", 
        element: <LoginPage /> 
    },
    {
        path: "/dashboard",
        element: <Layout />, 
        children: [
            {
                path: "", 
                element: <Dashboard />, 
            },
            {
                path: "patients",
                element: <PatientList/>
            },
            {
                path: "patient/:id?",
                element: <Patient/>
            }
        ],
    },
]);
