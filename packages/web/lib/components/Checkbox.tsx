/* eslint-disable react/jsx-fragments */
import React, { Fragment, InputHTMLAttributes, useEffect, useRef } from 'react';
import UnformPropsDTO from './dtos/UnformPropsDTO';

export interface CheckboxOption {
  id: string;
  value: string;
  label: string;
}

interface InputProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type'> {
  name: string;
  unformProps: UnformPropsDTO<string[]>;
  options: CheckboxOption[];
}

export const Checkbox: React.FC<InputProps> = ({
  unformProps: { fieldName, registerField, defaultValue = [] },
  options,
  className,
  ...rest
}) => {
  const inputRefs = useRef<HTMLInputElement[]>([]);

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
      {options.map(option => (
        <label htmlFor={option.id} key={option.id} className={className}>
          <input
            ref={ref => ref && inputRefs.current.push(ref)}
            id={option.id}
            value={option.value}
            defaultChecked={defaultValue.includes(option.id)}
            type="checkbox"
            {...rest}
          />
          {option.label}
        </label>
      ))}
    </Fragment>
  );
};
