import React, { InputHTMLAttributes, useEffect, useRef } from 'react';
import { useField } from '@unform/core';

export interface CheckboxOption {
  value: string;
  label: string;
}

interface InputProps
  extends Omit<
    InputHTMLAttributes<HTMLInputElement>,
    'type' | 'defaultChecked'
  > {
  name: string;
  options: CheckboxOption[];
}

const Checkbox: React.FC<InputProps> = ({
  name,
  options,
  className,
  ...rest
}) => {
  const inputRefs = useRef<HTMLInputElement[]>([]);
  const { registerField, fieldName, defaultValue } = useField(name);

  useEffect(() => {
    registerField<string[]>({
      name: fieldName,
      ref: inputRefs.current,
      getValue: (refs: HTMLInputElement[]) => {
        return refs.filter(ref => ref.checked).map(ref => ref.value);
      },
      clearValue: (refs: HTMLInputElement[]) => {
        refs.forEach(ref => {
          ref.checked = false;
        });
      },
      setValue: (refs: HTMLInputElement[], values) => {
        refs.forEach(ref => {
          if (values.includes(ref.value)) ref.checked = true;
        });
      },
    });
  }, [fieldName, registerField]);

  return (
    <>
      {options.map((option, index) => (
        <label htmlFor={option.value} key={option.value} className={className}>
          <input
            defaultChecked={defaultValue?.includes(option.value)}
            ref={ref => ref && (inputRefs.current[index] = ref)}
            value={option.value}
            id={option.value}
            type="checkbox"
            {...rest}
          />
          {option.label}
        </label>
      ))}
    </>
  );
};

export default Checkbox;
