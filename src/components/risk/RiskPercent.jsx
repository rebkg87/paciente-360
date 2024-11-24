import React from 'react'

const RiskPercent = ({ bgcolor, percent, iconMed, label, textcolor }) => {
  return (
    <div className="flex flex-col items-center gap-5">
        <div className={`w-[18rem] h-[18rem] rounded-full flex flex-col gap-4 justify-center items-center ${bgcolor}`}>
            <img className="" src={iconMed} alt={label}></img>
            <p className="text-in-range font-hanken font-medium">Pocentaje de riesgo:</p>
            <p className={`font-hanken text-6xl font-bold ${textcolor}`}>{percent}%</p>
        </div>
      
    </div>
  )
}

export default RiskPercent
