import { fetchOpenAIResponse } from "../../../openai";
import Modal from "./Modal";
import { useState } from "react";
import { ClipLoader } from "react-spinners";

const TestsButton = ({ values }) => {
    const [response, setResponse] = useState("");
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [loading, setLoading] = useState(false);

    const handleClick = async () => {
        setIsModalOpen(true);
        setLoading(true);
        try {
            const aiResponse = await fetchOpenAIResponse(
                JSON.stringify(values)
            );
            setResponse(aiResponse);
        } catch (error) {
            console.error("Error al llamar a OpenAI:", error);
            setResponse("Hubo un error al obtener la respuesta.");
            setIsModalOpen(true);
        } finally {
            setLoading(false);
        }
    };

    const formatText = (text) => {
        const formattedText = text
            .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")
            .replace(/(\d+\. )/g, "<br/><br/>");
        return <div dangerouslySetInnerHTML={{ __html: formattedText }} />;
    };

    return (
        <div>
            <button
                onClick={handleClick}
                className="btn-primary bg-alarm rounded-md text-white p-3 mb-8"
            >
                Pruebas a valorar
            </button>

            {isModalOpen && (
                <Modal onClose={() => setIsModalOpen(false)}>
                    <h2 className="text-3xl font-bold pb-4">
                        Recomendaciones Médicas:
                    </h2>

                    {loading ? (
                        <div className="flex justify-center items-center mt-8">
                            <ClipLoader
                                size={50}
                                color={"#406E69"}
                                loading={loading}
                            />
                        </div>
                    ) : (
                        <p className="pb-9">{response && formatText(response)}</p>
                    )}
                    <hr></hr>
                    <p className="italic pt-9">
                        Nota Importante:
                        <br />
                        Las recomendaciones y pruebas sugeridas se basan en los
                        valores proporcionados. Sin embargo, es fundamental que
                        se realice una evaluación clínica completa y detallada
                        del paciente para confirmar estas sugerencias y
                        determinar la necesidad de cualquier intervención
                        adicional. Cada caso debe ser considerado
                        individualmente, y las pruebas recomendadas deben ser
                        evaluadas en el contexto de la historia clínica completa
                        y los criterios médicos pertinentes.
                    </p>
                </Modal>
            )}
        </div>
    );
};

export default TestsButton;
