import React, { useState } from "react";
import AddButton from "./AddButton";
import FormModal from "./FormModal";

const AddFeature = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    const handleFormSubmit = (event) => {
        event.preventDefault();
        closeModal();
    };

    return (
        <div>
            <AddButton
                buttonText="Agregar +"
                buttonStyle="border border-medium-soft-green-transparency p-2 hover:bg-medium-soft-green-transparency text-medium-soft-green hover:text-medium-soft-green" 
                onClick={openModal}
            />

            <FormModal isOpen={isModalOpen} onClose={closeModal} title="Agregar Nuevo Elemento">
                <form onSubmit={handleFormSubmit} className="space-y-4">
                    <div>
                        <label className="block text-gray-700 text-sm font-medium mb-1">
                            Nombre
                        </label>
                        <input
                            type="text"
                            className="w-full border-gray-300 rounded-lg shadow-sm focus:ring focus:ring-medium-soft-green focus:border-medium-soft-green"
                            required
                        />
                    </div>
                    <div>
                        <label className="block text-gray-700 text-sm font-medium mb-1">
                            Descripción
                        </label>
                        <textarea
                            className="w-full border-gray-300 rounded-lg shadow-sm focus:ring focus:ring-medium-soft-green focus:border-medium-soft-green"
                            rows="3"
                            required
                        ></textarea>
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-medium-soft-green hover:bg-soft-gray text-white rounded-lg p-2"
                    >
                        Guardar
                    </button>
                </form>
            </FormModal>
        </div>
    );
};

export default AddFeature;
