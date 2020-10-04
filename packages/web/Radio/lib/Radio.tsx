import React, { useEffect, useRef, InputHTMLAttributes } from 'react';
import { useField } from '@unform/core';

export interface RadioOption {
  value: string;
  label: string;
}

interface RadioProps
  extends Omit<
    InputHTMLAttributes<HTMLInputElement>,
    'defaultChecked' | 'value' | 'id' | 'name' | 'type' | 'defaultValue'
  > {
  name: string;
  options: RadioOption[];
}

const Radio: React.FC<RadioProps> = ({ name, options, className, ...rest }) => {
  const inputRefs = useRef<HTMLInputElement[]>([]);
  const { fieldName, registerField, defaultValue = '' } = useField(name);

  useEffect(() => {
    registerField<string>({
      name: fieldName,
      ref: inputRefs.current,
      getValue: (refs: HTMLInputElement[]) => {
        return refs.find(ref => ref.checked)?.value || '';
      },
      setValue: (refs: HTMLInputElement[], value) => {
        const inputRef = refs.find(ref => ref.value === value);
        if (inputRef) inputRef.checked = true;
      },
      clearValue: (refs: HTMLInputElement[]) => {
        const inputRef = refs.find(ref => ref.checked);
        if (inputRef) inputRef.checked = false;
      },
    });
  }, [fieldName, registerField]);

  return (
    <>
      {options.map((option, index) => (
        <label key={option.value} htmlFor={option.value} className={className}>
          <input
            ref={ref => ref && (inputRefs.current[index] = ref)}
            defaultChecked={defaultValue === option.value}
            value={option.value}
            id={option.value}
            name={name}
            type="radio"
            {...rest}
          />
          {option.label}
        </label>
      ))}
    </>
  );
};

export default Radio;
