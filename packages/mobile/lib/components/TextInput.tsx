import { useField } from '@unform/core';
import React, { useCallback, useEffect, useRef } from 'react';
import { TextInputProps, TextInput as RNTextInput } from 'react-native';

interface InputProps extends TextInputProps {
  name: string;
}

interface InputRefProps extends RNTextInput {
  value: string;
}

const TextInput: React.FC<InputProps> = ({ name, onChangeText, ...rest }) => {
  const inputRef = useRef<InputRefProps>(null);
  const { registerField, fieldName, defaultValue } = useField(name);

  useEffect(() => {
    if (inputRef.current) inputRef.current.value = defaultValue;
  }, [defaultValue]);

  useEffect(() => {
    registerField<string>({
      name: fieldName,
      ref: inputRef.current,
      path: 'value',
      setValue(ref: InputRefProps, value) {
        ref.value = value;
        ref.setNativeProps({ text: value });
      },
      clearValue: (ref: InputRefProps) => {
        ref.value = '';
        ref.clear();
      },
    });
  }, [fieldName, registerField]);

  const UnformOnChangeText = useCallback(
    (value: string) => {
      if (inputRef.current) inputRef.current.value = value;
      if (onChangeText) onChangeText(value);
    },
    [onChangeText],
  );

  return (
    <RNTextInput
      ref={inputRef}
      defaultValue={defaultValue}
      onChangeText={UnformOnChangeText}
      {...rest}
    />
  );
};

export default TextInput;
