import { forwardRef, InputHTMLAttributes, Ref } from 'react';
import { FieldError } from 'react-hook-form';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  errors?: FieldError;
}

export const Input = forwardRef(
  ({ label, errors, ...props }: InputProps, ref: Ref<HTMLInputElement>) => {
    return (
      <div className="flex flex-col w-full">
        <label htmlFor={props.id} className="text-accent">
          {label}
        </label>
        <input
          ref={ref}
          className="input input-bordered input-accent text-neutral-400  w-full max-w-xs"
          id={props.id}
          {...props}
        />
        {errors && (
          <span className="text-red-500 font-light text-sm mt-1">
            {errors?.message}
          </span>
        )}
      </div>
    );
  },
);
