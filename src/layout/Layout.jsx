import { Outlet, useNavigate } from "react-router-dom";
import Sidebar from "../components/general/Sidebar";
import React, { useEffect } from "react";
import { useUser } from "../context/userContext";
import Footer from "../components/general/Footer";

const Layout = () => {
    const navigate = useNavigate();
    const { user } = useUser();

    useEffect(() => {
        if (!user && !localStorage.getItem("user")) {
            navigate("/");
        }
    }, [user, navigate]);

    const currentDate = new Date();

    let formattedDate = new Intl.DateTimeFormat('es-ES', {
        weekday: 'long',
        day: '2-digit',
        month: 'long',
        year: 'numeric',
    }).format(currentDate);

    const weekday = formattedDate.split(' ')[0];
    const capitalizedWeekday = weekday.charAt(0).toUpperCase() + weekday.slice(1);

    formattedDate = formattedDate.replace(weekday, capitalizedWeekday);

    return (
        <div className="flex h-screen bg-soft-gray relative">
            <aside className="w-[20%] h-full border-r border-separate z-0 relative">
                <Sidebar />
            </aside>
            <div className="flex flex-col w-full">
                <header className="pt-6 pr-8 text-right text-dark-green">
                    {formattedDate}
                </header>
                <main className="flex-grow p-5 overflow-y-auto">
                    <Outlet />
                </main>
                <footer className="fixed bottom-0 left-0 w-full z-50">
                    <Footer />
                </footer>
            </div>
        </div>
    );
};

export default Layout;