import { patients } from "../../data/patients";
import CheckupText from "./CheckupText";

const PatientInfo = ({ id = 1 }) => {
    const lastCheckup = new Date(patients[id].lastCheckup);
    


    return (

        <div className="text-dark-green max-w-[40.625rem] pt-9">
            <CheckupText lastCheckup={lastCheckup}/>
            <h1 className="text-5xl font-extrabold uppercase">
                {patients[id].name} {patients[id].surname}
            </h1>
            <div className="pt-2 flex justify-between text-2xl">
                <h5>
                    Edad: <span className="font-bold">{patients[id].age}</span>
                </h5>
                <h5>—</h5>
                <h5>
                    Peso:{" "}
                    <span className="font-bold">{patients[id].weight}</span>
                </h5>
                <h5>—</h5>
                <h5>
                    Sexo biológico:{" "}
                    <span className="font-bold">{patients[id].sex}</span>
                </h5>
            </div>
        </div>
    );
};

export default PatientInfo;
