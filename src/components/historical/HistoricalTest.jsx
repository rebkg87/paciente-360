import { useState } from "react";

const HistoricalTest = () => {

  const reports = [
    { date: "01/01/2024", type: "Laboratorio" },
    { date: "05/01/2024", type: "Imagen" },
    { date: "15/02/2024", type: "Laboratorio" },
    { date: "20/03/2024", type: "Imagen" },
    { date: "10/04/2024", type: "Laboratorio" },
    { date: "25/05/2024", type: "Imagen" },
    { date: "18/06/2024", type: "Laboratorio" },
    { date: "30/07/2024", type: "Imagen" },
    { date: "12/08/2024", type: "Laboratorio" },
    { date: "05/09/2024", type: "Imagen" },
    { date: "22/10/2024", type: "Laboratorio" },
    { date: "30/11/2024", type: "Imagen" },
  ];

  const [selectedType, setSelectedType] = useState("Documento");
  const [startDate, setStartDate] = useState("2024-01-01");
  const [endDate, setEndDate] = useState("2024-11-24");

  const filteredReports = reports.filter((report) => {
    const reportDate = new Date(
      report.date.split("/")[2], 
      report.date.split("/")[1] - 1, 
      report.date.split("/")[0] 
    );
    const isWithinRange =
      reportDate >= new Date(startDate) && reportDate <= new Date(endDate);
    const matchesType =
      selectedType === "Documento" || report.type === selectedType;
    return isWithinRange && matchesType;
  });

  return (
    <div className="bg-white p-6 rounded-[30px] shadow-md border border-gray-200">
      <div className="flex gap-4 items-end justify-end mb-6">
        <div className="flex gap-4">
          <div>
            <label htmlFor="start-date" className="block text-sm font-medium text-text-color-soft">
              Desde
            </label>
            <input
              id="start-date"
              type="date"
              className="mt-1 w-full px-4 py-2 rounded-lg text-text-color-general bg-gray-50"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="end-date" className="block text-sm font-medium text-text-color-soft">
              Hasta
            </label>
            <input
              id="end-date"
              type="date"
              className="mt-1 w-full px-4 py-2 rounded-lg text-text-color-general bg-gray-50"
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
            />
          </div>
        </div>
        <div>
          <label htmlFor="report-type" className="block text-sm font-medium text-text-color-soft item-center">
            Tipo de Informe
          </label>
          <select
            id="report-type"
            className="mt-1 px-4 py-2 rounded-lg text-text-color-general bg-gray-50"
            value={selectedType}
            onChange={(e) => setSelectedType(e.target.value)}
          >
            <option>Documento</option>
            <option>Laboratorio</option>
            <option>Imagen</option>
          </select>
        </div>
      </div>
      <p className="text-sm text-text-color-soft mb-4">
        Mostrando resultados del <span className="font-medium">{new Date(startDate).toLocaleDateString("es-ES")}</span> al{" "}
        <span className="font-medium">{new Date(endDate).toLocaleDateString("es-ES")}</span>
      </p>
      <div className="grid grid-cols-4 gap-4">
        {filteredReports.length > 0 ? (
          filteredReports.map((report, index) => (
            <div
              key={index}
              className="p-4 border border-separator-color rounded-lg bg-white shadow-sm text-center"
            >
              <p className="text-text-color-general font-medium">{report.date}</p>
              <p className="text-text-color-soft text-sm">{report.type}</p>
              <button
                className="mt-2 text-medium-soft-green hover:text-gray-50 underline text-sm"
              >
                Abrir
              </button>
            </div>
          ))
        ) : (
          <p className="text-center text-text-color-soft col-span-4">
            No hay resultados para el filtro seleccionado.
          </p>
        )}
      </div>
    </div>
  );
};

export default HistoricalTest;