import { useParams } from "react-router-dom";
import PatientInfo from "../components/patient/PatientInfo";
import RiskPercentGroupCard from "../components/risk/RiskPercentGroupCard";
import RiskGraph from "../components/risk/RiskGraph";
import MedicationTable from "../components/patient/MedicationTable";
import VisitsTable from "../components/patient/VisitsTable";
import HistoricalTest from "../components/historical/HistoricalTest";
import { patients } from "../data/patients";

const Patient = () => {
    const { id } = useParams();
    const patient = patients[id];
    return (
        <section className="text-dark-green pb-16 max-w-max m-auto">
            <PatientInfo id={id} />
            <RiskPercentGroupCard healthData={patient.medicalValues}/>
            <h3 className="text-2xl font-bold underline mt-8 mb-8">Gráfico comparativo</h3>
            <RiskGraph/>
            <h3 className="text-2xl font-bold underline mt-16 mb-8">Medicamentos</h3>
            <MedicationTable/>
            <h3 className="text-2xl font-bold underline mt-16 mb-8">Histórico de pruebas</h3>
            <HistoricalTest/>
            <h3 className="text-2xl font-bold underline mt-16 mb-8">Visitas médicas</h3>
            <VisitsTable/>
        </section>
    );
};

export default Patient;
