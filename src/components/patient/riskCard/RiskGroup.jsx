import { units, friendlyNames } from "../../../data/healthMetrics";

const RiskGroup = ({ key, style, groupedIndicators }) => {
    return (
        <div key={key} className={`${style.color} mb-9`}>
            <h2 className={`font-semibold text-[1.75rem] underline`}>
                {style.title}:
            </h2>
            <div>
                {groupedIndicators.map(({ key, value }) => (
                    <div key={key}>
                        <p className="text-xl">
                            {friendlyNames[key] || key}: {value} {units[key]}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default RiskGroup;
