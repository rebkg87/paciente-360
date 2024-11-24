import React from "react";

const FilterSelect = ({ title, categories }) => {
  return (
    <div className="w-[200px]">
      {title && <h2 className="mb-2 text-lg font-bold text-text-color-general">{title}</h2>}
      <select
        className="w-full bg-soft-gray border border-separator-color text-text-color-general font-hanken p-3 rounded-md drop-shadow-primary-shadow hover:bg-medium-soft-green-transparency focus:ring-2 focus:ring-dark-green"
        defaultValue=""
      >
        <option value="" disabled>
          Seleccionar categoría
        </option>
        {categories.map((category, index) => (
          <option key={index} value={category.toLowerCase()}>
            {category}
          </option>
        ))}
      </select>
    </div>
  );
};

export default FilterSelect;