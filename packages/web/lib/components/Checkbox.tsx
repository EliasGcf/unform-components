import React, { Fragment, InputHTMLAttributes, useEffect, useRef } from 'react';
import { useField } from '@unform/core';

export interface CheckboxOption {
  id: string;
  value: string;
  label: string;
}

interface InputProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type'> {
  name: string;
  options: CheckboxOption[];
}

export const Checkbox: React.FC<InputProps> = ({
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
      setValue: (refs: HTMLInputElement[], ids) => {
        refs.forEach(ref => {
          if (ids.includes(ref.id)) ref.checked = true;
        });
      },
    });
  }, [fieldName, registerField]);

  return (
    <Fragment>
      {options.map((option, index) => (
        <label htmlFor={option.id} key={option.id} className={className}>
          <input
            defaultChecked={defaultValue?.includes(option.id)}
            ref={ref => ref && (inputRefs.current[index] = ref)}
            value={option.value}
            id={option.id}
            type="checkbox"
            {...rest}
          />
          {option.label}
        </label>
      ))}
    </Fragment>
  );
};
