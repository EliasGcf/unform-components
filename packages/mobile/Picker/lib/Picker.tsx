import React, { useCallback, useEffect, useRef, useState } from 'react';
import { Picker } from '@react-native-community/picker';
import {
  PickerProps,
  PickerItemProps,
  ItemValue,
} from '@react-native-community/picker/typings/Picker';
import { useField } from '@unform/core';

export interface PickerOption extends PickerItemProps {
  label: string;
}

interface UPickerProps extends Omit<PickerProps, 'selectedValue'> {
  name: string;
  options: PickerOption[];
  placeholderColor?: string;
  placeholder?: string;
}

const RNPicker: React.FC<UPickerProps> = ({
  name,
  options,
  placeholder = 'Select an option',
  placeholderColor = '#c6c6c6',
  onValueChange,
  ...rest
}) => {
  const inputRef = useRef<Picker>(null);
  const { fieldName, registerField, defaultValue = '' } = useField(name);

  const [selectedValue, setSelectedValue] = useState<ItemValue>(defaultValue);

  const replacedOnValueChange = useCallback(
    (itemValue: ItemValue, itemIndex: number) => {
      setSelectedValue(itemValue);
      onValueChange && onValueChange(itemValue, itemIndex);
    },
    [onValueChange],
  );

  useEffect(() => {
    registerField<ItemValue>({
      name: fieldName,
      ref: inputRef.current,
      getValue: (ref: Picker) => ref.props.selectedValue || '',
      setValue: (_, value) => setSelectedValue(value),
      clearValue: () => setSelectedValue(''),
    });
  }, [fieldName, registerField]);

  return (
    <Picker
      ref={inputRef}
      selectedValue={selectedValue}
      testID="picker"
      onValueChange={replacedOnValueChange}
      {...rest}
    >
      <Picker.Item color={placeholderColor} label={placeholder} value="" />
      {options.map(option => (
        <Picker.Item key={option.value} color="#000" {...option} />
      ))}
    </Picker>
  );
};

export default RNPicker;
