import SearchInput from "../components/general/SearchInput";
import { patients } from "../data/patients";
import PersonCard from "../components/person/personCard";

const PatientList = () => {
    const name = "López";
    return (
        <section className="px-[6.25rem] text-dark-green pb-16">
            <div className="flex gap-4 items-center">
                <img src="/icons/stetoscope.svg" />
                <h1 className="font-extrabold text-[3.25rem]">
                    DRA. <span className="uppercase">{name}</span> - Pacientes
                </h1>
            </div>
            <div className="mt-14">
                <SearchInput placeholder="Buscar paciente" patients={true} />

                <div className="flex flex-col gap-4 mt-14">
                    {Object.entries(patients).map(([id, patient]) => (
                        <PersonCard
                            key={id}
                            id={id}
                            name={patient.name}
                            lastName={patient.surname}
                            dni={patient.dni}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default PatientList;
