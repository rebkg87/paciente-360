import { useNavigate } from "react-router-dom";

const PersonCard = ({ id, name, lastName, dni }) => {
    const navigate = useNavigate();
    return (
        <div className="w-full px-7 py-5 text-2xl bg-white drop-shadow-primary-shadow rounded-lg flex justify-between items-center cursor-pointer" 
        onClick={() => navigate(`/dashboard/patient/${id}`)}>
            <div className="flex flex-col">
                <h3 className="font-bold">
                    {name} {lastName}
                </h3>
            </div>
            <div className="flex flex-col items-end">
                <p className="font-bold">
                    DNI: <span className="font-normal">{dni}</span>
                </p>
            </div>
        </div>
    );
};

export default PersonCard;
