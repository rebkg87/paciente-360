import React, { useState } from 'react';

const Filter = ({ filterOptions = [], onFilterChange }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedFilter, setSelectedFilter] = useState(filterOptions[0] || "");

    const toggleDropdown = () => setIsOpen(!isOpen);

    const selectFilter = (filter) => {
        setSelectedFilter(filter);
        setIsOpen(false);
        if (onFilterChange) onFilterChange(filter);
    };

    return (
        <div className="relative w-[180px] h-[38.353px] flex-shrink-0 flex justify-center rounded-[10px] bg-[#F9FBFF]">
            <button
                onClick={toggleDropdown}
                className="text-sm text-gray-500 flex items-center focus:outline-none"
            >
                Filtrar por: <span className="ml-1 font-semibold">{selectedFilter}</span>
                <svg
                    className={`w-4 h-4 ml-1 transform transition-transform ${isOpen ? "rotate-180" : "rotate-0"
                        }`}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                >
                    <path
                        fillRule="evenodd"
                        d="M5.293 9.293a1 1 0 011.414 0L10 12.586l3.293-3.293a1 1 0 011.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                        clipRule="evenodd"
                    />
                </svg>
            </button>

            {isOpen && (
                <div className="absolute right-0 mt-2 w-40 bg-white rounded-md shadow-lg border border-gray-200 z-10">
                    <ul className="py-1 text-sm text-gray-700">
                        {filterOptions.map((filter) => (
                            <li
                                key={filter}
                                onClick={() => selectFilter(filter)}
                                className={`px-4 py-2 cursor-pointer hover:bg-gray-100 ${selectedFilter === filter ? "font-semibold text-medium-soft-green" : ""
                                    }`}
                            >
                                {filter}
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
};

export default Filter;
