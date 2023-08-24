import React, { useState } from 'react';

const CheckboxForm = ({ options, selectedOptions, onCheckboxChange }) => {
  return (
    <div className='w-full'>
      {options.map((option) => (
        <label className="w-full flex items-center border bg-white rounded-md m-1 p-2" key={option}>
          <input
            type="checkbox"
            value={option}
            checked={selectedOptions.includes(option)}
            onChange={() => onCheckboxChange(option)}
            className='mx-3'
          />
          {option}
        </label>
      ))}
    </div>
  );
};

export default CheckboxForm;
