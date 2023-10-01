import { forwardRef, Ref, SelectHTMLAttributes } from 'react';
import { FieldError } from 'react-hook-form';

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  label: string;
  errors?: FieldError;
  options: string[];
  defaultOption?: string;
}

export const Select = forwardRef(
  (
    {
      label,
      errors,
      options,
      defaultOption = 'Pick one',
      ...props
    }: SelectProps,
    ref: Ref<HTMLSelectElement>,
  ) => {
    return (
      <div className="flex flex-col w-full">
        <label htmlFor={props.id} className="text-accent">
          {label}
        </label>
        <select
          ref={ref}
          className="select select-accent w-full max-w-xs text-neutral-400"
          id={props.id}
          {...props}
        >
          <option value={defaultOption}>{defaultOption}</option>
          {options.map((option, index) => (
            <option key={index} value={option}>
              {option}
            </option>
          ))}
        </select>
        {errors && (
          <span className="text-red-500 font-light text-sm mt-1">
            {errors?.message}
          </span>
        )}
      </div>
    );
  },
);
