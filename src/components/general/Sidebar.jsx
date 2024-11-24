import { NavLink } from "react-router-dom";


const Sidebar = () => {
    return (
        <aside className="font-sans pt-16 w-1/5 h-full">
            <div className="w-[600%] ml-0">

                <h2 className="font-bold text-[#003E37] mb-2 pl-[10%]">CENTRO MÉDICO LASCODERS</h2>
                <div className="infoContainer">
                    <p className="pl-[10%]">Carrer de la alegria 123</p>
                    <p className="pl-[10%]">123</p>
                    <p className="pl-[10%]">09029, Barcelona</p>
                </div>
                <hr className="border-0 border-t-[1px] mt-12 w-[83.5%] ml-0" />
                <ul className="text-[#003E37] font-sans mt-[25%] ml-[20%] list-none pl-0 font-bold">
                    <li className="py-4">
                        <img src="/icons/User.svg" alt="Dashboard" className="inline-block mr-2" />
                        <NavLink to="/dashboard">Dashboard</NavLink>
                    </li>
                    <li className="py-4">
                        <img src="/icons/Search.svg" alt="Search Icon" className="inline-block mr-2" />
                        <NavLink to="/dashboard/patients">Pacientes</NavLink>
                    </li>
                    <li className="py-4">
                        <img src="/icons/Calendar.svg" alt="Calendar Icon" className="inline-block mr-2" />
                        <NavLink to="/dashboard/calendar">Calendario</NavLink>
                    </li>
                </ul>

            </div>
        </aside>
    );
};

export default Sidebar;