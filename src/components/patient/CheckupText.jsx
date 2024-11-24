
const CheckupText = ({ lastCheckup }) => {
    const currentDate = new Date();
    const differenceInMilliseconds = currentDate - lastCheckup;
    const differenceInYears = differenceInMilliseconds / (1000 * 60 * 60 * 24 * 365);
    const needsCheckup = differenceInYears > 1;
    let years = 0;
    let months = 0;

    if (needsCheckup) {
        years = currentDate.getFullYear() - lastCheckup.getFullYear();
        months = currentDate.getMonth() - lastCheckup.getMonth();
    }
        
    return (
        <h3 className="text-alarm font-bold pb-2 text-xl">
            { needsCheckup && (
                
                `Última visita: ${years} años ${months} meses. Se recomienda revisión médica.`
            )}
        </h3>
    );
};

export default CheckupText;
