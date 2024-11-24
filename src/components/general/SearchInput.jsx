const SearchInput = ({ placeholder, patients = false }) => {
    return (
        <div className="relative w-full h-[38.353px]">
            { !patients && (
                <img
                    src="\icons\Search.svg"
                    alt="icono"
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 w-4 h-4"
                />
            )}
            <input
                type="text"
                placeholder={placeholder}
                className={`h-full pl-[40px] text-sm text-[#292D32]  rounded-[10px] focus:outline-none focus:ring-2 focus:ring-medium-soft-green ${
                    patients
                        ? "bg-white w-full drop-shadow-primary-shadow"
                        : "bg-[#F9FBFF] w-[13.626rem]"
                } `}
            />
                        { patients && (
                <img
                    src="\icons\Search.svg"
                    alt="icono"
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 w-4 h-4"
                />
            )}
        </div>
    );
};

export default SearchInput;
