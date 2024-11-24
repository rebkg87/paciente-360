import RiskPercentGroup from './RiskPercentGroup'
import RiskCard from '../patient/riskCard/RiskCard'

const RiskPercentGroupCard = ({healthData}) => {
    return (
        <div className='flex flex-row gap-16 items-start pt-14 max-w-max'>
            <RiskPercentGroup />
            <RiskCard healthData = {healthData}/>
        </div>
    )
}

export default RiskPercentGroupCard