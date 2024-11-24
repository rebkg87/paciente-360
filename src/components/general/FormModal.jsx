import React from "react";

const FormModal = ({ isOpen, onClose, title, children }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
            <div className="bg-white w-[400px] rounded-lg shadow-lg p-6">
                <div className="flex justify-between items-center border-b pb-2 mb-4">
                    <h2 className="text-lg font-semibold">{title}</h2>
                    <button onClick={onClose} className="text-gray-500 hover:text-red-500">
                        ✕
                    </button>
                </div>
                {children}
            </div>
        </div>
    );
};

export default FormModal;
