import React from 'react';
import { useFormContext, FieldValues, UseFormRegister } from 'react-hook-form';

export type Option = {
  value: string;
  label: string;
}

interface SelectBoxProps {
  name: string;
  label: string;
  options: Option[];
  register: UseFormRegister<FieldValues>;
}

const Dropdown: React.FC<SelectBoxProps> = ({ name, label, options, register, ...rest }) => {
  return (
    <div>
      <label>{label}</label>
      <select {...register(name)} {...rest}>
        {options.map(option => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Dropdown;
