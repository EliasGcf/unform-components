import React, { useCallback, useEffect, useRef } from 'react';
import { TextInputProps, TextInput as RNTextInput } from 'react-native';
import UnformPropsDTO from './dtos/UnformPropsDTO';

interface InputProps extends TextInputProps {
  name: string;
  unformProps: UnformPropsDTO;
}

interface InputRefProps extends RNTextInput {
  value: string;
}

const TextInput: React.FC<InputProps> = ({
  unformProps: { fieldName, registerField, defaultValue },
  onChangeText,
  ...rest
}) => {
  const inputRef = useRef<InputRefProps>(null);

  useEffect(() => {
    if (inputRef.current && defaultValue) inputRef.current.value = defaultValue;
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
