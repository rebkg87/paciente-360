const Modal = ({ children, onClose }) => {
    return (
        <div
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-1000 text-xl"
            onClick={onClose}
        >
            <div
                className="bg-white p-9 rounded-lg shadow-lg w-3/4 max-w-[52rem] max-h-[45rem] overflow-auto scrollbar-thin"
                onClick={(e) => e.stopPropagation()}
            >
                {children}
                <button
                    onClick={onClose}
                    className="mt-5 px-4 py-2 bg-alarm text-white rounded"
                >
                    Cerrar
                </button>
            </div>
        </div>
    );
};

export default Modal;
