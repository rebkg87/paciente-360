import React, { useState, useEffect } from 'react';
import SearchInput from '../general/SearchInput';
import Filter from '../general/Filter';
import AddFeature from '../general/AddFeature';

const VisitsTable = () => {
    const [visits, setVisits] = useState([
        {
            fechaVisita: "2024-01-15",
            especialidad: "Cardiología",
            centroMedico: "Hospital Lini",
        },
        {
            fechaVisita: "2024-02-10",
            especialidad: "Dermatología",
            centroMedico: "CAP Sagrada Familia",
        },
        {
            fechaVisita: "2024-03-20",
            especialidad: "Neurología",
            centroMedico: "CAP Encants",
        },
        {
            fechaVisita: "2024-04-05",
            especialidad: "Ginecología",
            centroMedico: "Hospital Lini",
        },
        {
            fechaVisita: "2024-05-12",
            especialidad: "Oftalmología",
            centroMedico: "CAP Sagrada Familia",
        },
        {
            fechaVisita: "2024-06-25",
            especialidad: "Pediatría",
            centroMedico: "CAP Encants",
        },
    ]);
    const [filter, setFilter] = useState("Recientes");

    const applyFilter = (filter) => {
        switch (filter) {
            case "Recientes":
                setVisits((prevVisits) => [
                    ...prevVisits.sort((a, b) => new Date(b.fechaVisita) - new Date(a.fechaVisita)),
                ]);
                break;
            case "Antiguos":
                setVisits((prevVisits) => [
                    ...prevVisits.sort((a, b) => new Date(a.fechaVisita) - new Date(b.fechaVisita)),
                ]);
                break;
            default:
                break;
        }
    };

    useEffect(() => {
        applyFilter(filter);
    }, [filter]);

    const addNewVisit = (newVisit) => {
        setVisits((prevVisits) => [...prevVisits, newVisit]);
    };

    return (
        <div className="w-full h-auto pb-4 flex-shrink-0 overflow-hidden bg-white rounded-[30px] shadow-md border border-gray-200">
            <div className="flex justify-between items-center p-6">
                <SearchInput placeholder="Buscar visita" />
                <Filter
                    filterOptions={["Recientes", "Antiguos"]}
                    onFilterChange={setFilter}
                />
                <AddFeature onAdd={addNewVisit} />
            </div>
            <div className="overflow-y-auto h-[90%] p-6">
                <table className="w-full text-sm text-left text-gray-700">
                    <thead className="bg-gray-100 sticky top-0">
                        <tr>
                            <th className="px-4 py-3 font-semibold">Fecha de visita</th>
                            <th className="px-4 py-3 font-semibold">Especialidad</th>
                            <th className="px-4 py-3 font-semibold">Centro médico</th>
                        </tr>
                    </thead>
                    <tbody>
                        {visits.map((visit, index) => (
                            <tr
                                key={index}
                                className={`${index % 2 === 0 ? "bg-white" : "bg-gray-50"
                                    } hover:bg-gray-100`}
                            >
                                <td className="px-4 py-3">{visit.fechaVisita}</td>
                                <td className="px-4 py-3">{visit.especialidad}</td>
                                <td className="px-4 py-3">{visit.centroMedico}</td>
                            </tr>
                        ))}
                    </tbody>
                    <tfoot>
                        <tr className="bg-gray-100">
                            <td colSpan={3} className="px-4 py-3 text-left font-semibold">
                                Total de visitas: {visits.length}
                            </td>
                        </tr>
                    </tfoot>
                </table>
            </div>
        </div>
    );
};

export default VisitsTable;
