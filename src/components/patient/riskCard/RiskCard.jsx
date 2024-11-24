import { thresholds, statusStyles } from "../../../data/healthMetrics";
import RiskGroup from "./RiskGroup";
import TestsButton from "./TestsButton";

const defaultHealthData = {
    colesterolTotal: 220,
    ldl: 150,
    hdl: 50,
    trigliceridos: 180,
    glucosa: 110,
    hemoglobinaGlucosilada: 6.8,
    presionArterial: "135/85",
    saturacionOxigeno: 98,
    frecuenciaCardiaca: 72,
    creatinina: 0.9,
    acidoUrico: 6.0,
    proteinaCReactiva: 2.0,
};

const RiskCard = ({ healthData = defaultHealthData }) => {
    const comparePressure = (patient, threshold) => {
        const [patientSystolic, patientDiastolic] = patient
            .split("/")
            .map(Number);
        const [thresholdSystolic, thresholdDiastolic] = threshold
            .split("/")
            .map(Number);
        return (
            patientSystolic >= thresholdSystolic ||
            patientDiastolic >= thresholdDiastolic
        );
    };

    const getStatus = (key, value) => {
        const threshold = thresholds[key];

        if (key === "presionArterial") {
            if (comparePressure(value, threshold.alarm)) return "alarma";
            if (comparePressure(value, threshold.risk)) return "riesgo";
            return "en-rango";
        }

        if (key === "hdl" || key === "saturacionOxigeno") {
            if (value <= threshold.alarm) return "alarma";
            if (value <= threshold.risk) return "riesgo";
            return "en-rango";
        }

        if (value >= threshold.alarm) return "alarma";
        if (value >= threshold.risk) return "riesgo";
        return "en-rango";
    };

    const groupedIndicators = Object.entries(healthData).reduce(
        (accumulator, [key, value]) => {
            const status = getStatus(key, value);
            if (!accumulator[status]) accumulator[status] = [];
            accumulator[status].push({ key, value });
            return accumulator;
        },
        {}
    );
    console.log(groupedIndicators["alarma"]);
    return (
        <section className="bg-white rounded-xl p-10 drop-shadow-3xl max-w-max overflow-y-auto scrollbar-thin scrollbar-thumb drop-shadow-primary-shadow">
            {Object.entries(statusStyles).map(([status, style]) => {
                if (!groupedIndicators[status]?.length) return null;
                return (
                    <RiskGroup
                        key={status}
                        style={style}
                        groupedIndicators={groupedIndicators[status]}
                    />
                );
            })}
            {(groupedIndicators["alarma"] ||
                groupedIndicators["riesgo"]) && (
                <TestsButton values={healthData} />
            )}
        </section>
    );
};

export default RiskCard;
