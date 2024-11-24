import React from 'react'
import logoutIcon from "/icons/logout.svg";
import { useNavigate } from 'react-router-dom';
import { useUser } from '../../context/userContext';

const LogoutButton = ({ onClick }) => {
    const navigate = useNavigate();
    const { logout } = useUser();

    const handleLogout = () => {
        localStorage.removeItem('user');
        logout();
        navigate('/');
    };

    return (
        <div>
            <button
                onClick={handleLogout}
                className={'flex-row w-full h-[54px] text-medium-soft-green font-bold flex items-center ml-5'} >
                    <img src={logoutIcon} alt="Icono" className="w-5 h-5 mr-1" />
                    Cerrar sesión
            </button>
        </div>
    )
}

export default LogoutButton