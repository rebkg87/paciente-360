const openaiApiKey = import.meta.env.VITE_OPENAI_API_KEY;

export const fetchOpenAIResponse = async (values) => {
    const prompt = `Una persona presenta los siguientes valores médicos: ${values}.
Quiero prevenir enfermedades Cardiovasculares, Renales y Metabólicas (CRM). Basándote en estos valores, ¿qué pruebas médicas recomiendas que esta persona debería realizar? Proporcióname una lista breve con explicaciones para cada prueba recomendada.`;

    try {
        const response = await fetch("https://api.openai.com/v1/chat/completions", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${openaiApiKey}`,
            },
            body: JSON.stringify({
                model: "gpt-3.5-turbo",
                messages: [
                    { role: "system", content: "Eres un asistente médico que ayuda con recomendaciones de pruebas médicas." },
                    { role: "user", content: prompt }
                ],
                max_tokens: 600,
                temperature: 0.2,
            }),
        });

        if (!response.ok) throw new Error(`Error: ${response.statusText}`);

        const data = await response.json();
        return data.choices[0].message.content.trim();  
    } catch (error) {
        console.error(error);
        throw error;
    }
};