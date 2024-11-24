import React from 'react'
import RiskPercent from './RiskPercent'

const RiskPercentGroup = () => {
    return (
        <div className='grid grid-cols-2 grid-rows-2 gap-2 items-center justify-center'>
            <div className="flex justify-end pr-[5px]">
                <RiskPercent bgcolor="bg-alarm-circle" iconMed="/icons/cardio.svg" textcolor="text-alarm" percent="60"/>
            </div>
            <div className="flex justify-start pl-[5px]">
                <RiskPercent bgcolor="bg-risk-circle" iconMed="/icons/rinon.svg" textcolor="text-risk" percent="50"/>
            </div>
            <div className='col-span-2 flex justify-center mt-[-80px]'>
                <RiskPercent bgcolor="bg-in-range-circle" iconMed="/icons/metab.svg" textcolor="text-in-range" percent="20" />
            </div>
        </div>
    )
}

export default RiskPercentGroup