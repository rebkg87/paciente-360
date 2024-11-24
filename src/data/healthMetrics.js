export const units = {
    colesterolTotal: "mg/dl",
    ldl: "mg/dl",
    hdl: "mg/dl",
    trigliceridos: "mg/dl",
    glucosa: "mg/dl",
    hemoglobinaGlucosilada: "%",
    presionArterial: "mmHg",
    saturacionOxigeno: "%",
    frecuenciaCardiaca: "lpm",
    creatinina: "mg/dl",
    acidoUrico: "mg/dl",
    proteinaCReactiva: "mg/l",
};

export const thresholds = {
    colesterolTotal: { risk: 201, alarm: 240 },
    ldl: { risk: 101, alarm: 160 },
    hdl: { risk: 40, alarm: 39 },
    trigliceridos: { risk: 151, alarm: 200 },
    glucosa: { risk: 100, alarm: 126 },
    hemoglobinaGlucosilada: { risk: 5.7, alarm: 6.5 },
    presionArterial: { risk: "120/80", alarm: "140/90" },
    saturacionOxigeno: { risk: 94, alarm: 90 },
    frecuenciaCardiaca: { risk: 101, alarm: 120 },
    creatinina: { risk: 1.3, alarm: 2.0 },
    acidoUrico: { risk: 7.3, alarm: 8.0 },
    proteinaCReactiva: { risk: 3, alarm: 10 },
};

export const friendlyNames = {
    colesterolTotal: "Colesterol Total",
    ldl: "Colesterol LDL",
    hdl: "Colesterol HDL",
    trigliceridos: "Triglicéridos",
    glucosa: "Glucosa",
    hemoglobinaGlucosilada: "Hemoglobina Glucosilada",
    presionArterial: "Presión Arterial",
    saturacionOxigeno: "Saturación de Oxígeno",
    frecuenciaCardiaca: "Frecuencia Cardíaca",
    creatinina: "Creatinina",
    acidoUrico: "Ácido Úrico",
    proteinaCReactiva: "Proteína C Reactiva"
};

export const statusStyles = {
    alarma: { 
        title: 'Alarma', 
        color: 'text-alarm'
    },
    riesgo: { 
        title: 'Riesgo', 
        color: 'text-risk'
    },
    'en-rango': { 
        title: 'En Rango', 
        color: 'text-in-range'
    }
};
