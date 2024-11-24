import React from "react";

const FilterSelect = ({ categories }) => {
  return (
    <select
      className="w-[180px] bg-soft-gray border border-separator-color text-text-color-general font-hanken p-3 rounded-md drop-shadow-primary-shadow hover:bg-medium-soft-green-transparency focus:ring-2 focus:ring-dark-green"
      defaultValue=""
    >
      <option value="" disabled>
        Filtrar por
      </option>
      {categories.map((category, index) => (
        <option key={index} value={category.toLowerCase()}>
          {category}
        </option>
      ))}
    </select>
  );
};

export default FilterSelect;