import React, { useRef, useEffect, useState, useCallback } from 'react';
import {
  StyleProp,
  StyleSheet,
  Text,
  TextStyle,
  View,
  ViewStyle,
} from 'react-native';
import { useField } from '@unform/core';
import RNCheckbox, { CheckBoxProps } from '@react-native-community/checkbox';

export interface CheckboxOption {
  value: string;
  label: string;
}

interface CheckboxProps extends CheckBoxProps {
  name: string;
  options: CheckboxOption[];
  containerStyle?: StyleProp<ViewStyle>;
  labelStyle?: StyleProp<TextStyle>;
}

interface InputRefProps extends RNCheckbox {
  value: string;
  checked: boolean;
}

const styles = StyleSheet.create({
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
});

const Checkbox: React.FC<CheckboxProps> = ({
  name,
  options,
  containerStyle,
  labelStyle,
  ...rest
}) => {
  const inputRefs = useRef<InputRefProps[]>([]);
  const { fieldName, registerField, defaultValue = [] } = useField(name);

  const [checkedValues, setCheckedValues] = useState<string[]>(defaultValue);

  useEffect(() => {
    inputRefs.current.forEach((ref, index) => {
      ref.value = options[index].value;
      ref.checked = checkedValues.includes(options[index].value);
    });
  }, [checkedValues, options]);

  const handleToggleOption = useCallback(
    (isChecked: boolean, optionValue: string) => {
      setCheckedValues(state => {
        if (isChecked) {
          return [...state, optionValue];
        }
        return state.filter(value => value !== optionValue);
      });
    },
    [],
  );

  useEffect(() => {
    registerField<string[]>({
      name: fieldName,
      ref: inputRefs.current,
      getValue: (refs: InputRefProps[]) => {
        return refs.filter(ref => ref.checked).map(ref => ref.value);
      },
      clearValue: () => setCheckedValues([]),
      setValue: (_, values) => {
        setCheckedValues(values);
      },
    });
  }, [fieldName, registerField]);

  return (
    <>
      {options.map(option => (
        <View
          key={option.value}
          style={[styles.checkboxContainer, containerStyle]}
        >
          <RNCheckbox
            value={checkedValues.includes(option.value)}
            onValueChange={(isChecked: boolean) => {
              handleToggleOption(isChecked, option.value);
            }}
            ref={(ref: InputRefProps) => ref && inputRefs.current.push(ref)}
            {...rest}
          />
          <Text style={[labelStyle]}>{option.label}</Text>
        </View>
      ))}
    </>
  );
};

export default Checkbox;
