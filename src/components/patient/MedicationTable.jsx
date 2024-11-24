import React, { useState, useEffect } from 'react';
import SearchInput from '../general/SearchInput';
import Filter from '../general/Filter';
import AddFeature from '../general/AddFeature';

const MedicationTable = () => {
    const [prescriptions, setPrescriptions] = useState([
        {
            nombre: "Medicamento A",
            inicio: "2024-01-01",
            fin: "2025-02-01",
            frecuencia: "Diaria",
            dosis: "20mg",
            prescripto: "Dr. Ferrigno",
        },
        {
            nombre: "Medicamento B",
            inicio: "2024-03-01",
            fin: "2025-03-15",
            frecuencia: "Cada 8 horas",
            dosis: "50mg",
            prescripto: "Dr. Marenco",
        },
        {
            nombre: "Medicamento C",
            inicio: "2024-04-01",
            fin: "2025-04-30",
            frecuencia: "Semanal",
            dosis: "100mg",
            prescripto: "Dr. Calles",
        },
    ]);
    const [filter, setFilter] = useState("Recientes");

    const today = new Date();

    const activePrescriptions = prescriptions.filter((prescription) => {
        const endDate = new Date(prescription.fin);
        return endDate >= today;
    });

    const applyFilter = (filter) => {
        switch (filter) {
            case "Recientes":
                setPrescriptions((prevPrescriptions) => [
                    ...prevPrescriptions.sort((a, b) => new Date(b.fin) - new Date(a.fin))
                ]);
                break;
            case "Antiguos":
                setPrescriptions((prevPrescriptions) => [
                    ...prevPrescriptions.sort((a, b) => new Date(a.fin) - new Date(b.fin))
                ]);
                break;
            case "Nombre":
                setPrescriptions((prevPrescriptions) => [
                    ...prevPrescriptions.sort((a, b) => a.nombre.localeCompare(b.nombre))
                ]);
                break;
            case "Frecuencia":
                setPrescriptions((prevPrescriptions) => [
                    ...prevPrescriptions.sort((a, b) => a.frecuencia.localeCompare(b.frecuencia))
                ]);
                break;
            default:
                break;
        }
    };

    useEffect(() => {
        applyFilter(filter);
    }, [filter]);

    const addNewPrescription = (newPrescription) => {
        setPrescriptions((prevPrescriptions) => [...prevPrescriptions, newPrescription]);
    };

    return (
        <div className="w-full h-auto pb-4 flex-shrink-0 overflow-hidden bg-white rounded-[30px] shadow-md border border-gray-200">
            <div className="flex justify-between items-center p-6">
                <SearchInput placeholder="Buscar" />
                <Filter
                    filterOptions={["Recientes", "Antiguos", "Nombre", "Frecuencia"]}
                    onFilterChange={setFilter}
                />
                <AddFeature onAdd={addNewPrescription} />
            </div>
            <div className="overflow-y-auto h-[90%] p-6">
                <table className="w-full text-sm text-left text-gray-700">
                    <thead className="bg-gray-100 sticky top-0">
                        <tr>
                            <th className="px-4 py-3 font-semibold">Nombre</th>
                            <th className="px-4 py-3 font-semibold">Inicio</th>
                            <th className="px-4 py-3 font-semibold">Fin</th>
                            <th className="px-4 py-3 font-semibold">Frecuencia</th>
                            <th className="px-4 py-3 font-semibold">Dosis</th>
                            <th className="px-4 py-3 font-semibold">Prescriptor/a</th>
                        </tr>
                    </thead>
                    <tbody>
                        {activePrescriptions.map((prescription, index) => (
                            <tr
                                key={index}
                                className={`${
                                    index % 2 === 0 ? "bg-white" : "bg-gray-50"
                                } hover:bg-gray-100`}
                            >
                                <td className="px-4 py-3">{prescription.nombre}</td>
                                <td className="px-4 py-3">{prescription.inicio}</td>
                                <td className="px-4 py-3">{prescription.fin}</td>
                                <td className="px-4 py-3">{prescription.frecuencia}</td>
                                <td className="px-4 py-3">{prescription.dosis}</td>
                                <td className="px-4 py-3">{prescription.prescripto}</td>
                            </tr>
                        ))}
                    </tbody>
                    <tfoot>
                        <tr className="bg-gray-100">
                            <td colSpan={6} className="px-4 py-3 text-left font-semibold">
                                Total de prescripciones activas: {activePrescriptions.length}
                            </td>
                        </tr>
                    </tfoot>
                </table>
            </div>
        </div>
    );
};

export default MedicationTable;
