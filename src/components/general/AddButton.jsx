const AddButton = ({ onClick, buttonText, buttonStyle }) => {
    return (
        <div className="flex items-center justify-center">
            <button
                onClick={onClick}
                className={`group ${buttonStyle} w-[100px] h-[45px] text-[15px] font-semibold rounded-[10px] flex gap-1 justify-center items-center `} >
                {buttonText}
            </button>
        </div>

    )
}

export default AddButton;
