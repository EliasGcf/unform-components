import React, { InputHTMLAttributes, useEffect, useRef } from 'react'
import { useField } from '@unform/core';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string
}

const Input: React.FC<InputProps> = ({ name, ...rest }) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const { fieldName, registerField } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value',
    });
  }, [fieldName, registerField]);


  return <input ref={inputRef} type="text" {...rest} />
}

export default Input
