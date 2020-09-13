import React, { InputHTMLAttributes, useEffect, useRef } from 'react';
import UnformPropsDTO from './dtos/UnformPropsDTO';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  unformProps: UnformPropsDTO;
}

const Input: React.FC<InputProps> = ({
  unformProps: { fieldName, registerField, defaultValue },
  ...rest
}) => {
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value',
    });
  }, [fieldName, registerField]);

  return (
    <input ref={inputRef} defaultValue={defaultValue} type="text" {...rest} />
  );
};

export default Input;
