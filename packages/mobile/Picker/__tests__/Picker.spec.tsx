import React, { RefObject } from 'react';
import { render, fireEvent, act } from '@testing-library/react-native';
import { Form } from '@unform/mobile';
import { FormHandles } from '@unform/core';

import Picker, { PickerOption } from '@mobile/Picker';

const submitMock = jest.fn(data => data);
const formRef: RefObject<FormHandles> = { current: null };
const options: PickerOption[] = [
  { value: 'value-1', label: 'Value 1' },
  { value: 'value-2', label: 'Value 2' },
];

describe('Picker', () => {
  it('should get the value on submitForm', () => {
    const { getByTestId } = render(
      <Form ref={formRef} onSubmit={submitMock}>
        <Picker name="test-picker" options={options} />
      </Form>,
    );

    fireEvent(getByTestId('picker'), 'onValueChange', options[0].value);

    formRef.current?.submitForm();
    expect(submitMock).toReturnWith({ 'test-picker': options[0].value });
  });

  it('should set the value on setValue function', () => {
    render(
      <Form ref={formRef} onSubmit={submitMock}>
        <Picker name="test-picker" options={options} />
      </Form>,
    );

    act(() => formRef.current?.setFieldValue('test-picker', options[0].value));

    formRef.current?.submitForm();
    expect(submitMock).toReturnWith({ 'test-picker': options[0].value });
  });

  it('should clear the value on clearValue function', () => {
    render(
      <Form
        ref={formRef}
        onSubmit={submitMock}
        initialData={{ 'test-picker': options[0].value }}
      >
        <Picker name="test-picker" options={options} />
      </Form>,
    );

    expect(formRef.current?.getFieldValue('test-picker')).toBe(
      options[0].value,
    );

    act(() => formRef.current?.clearField('test-picker'));

    formRef.current?.submitForm();

    expect(submitMock).toReturnWith({ 'test-picker': '' });
  });

  it('should to receive the value from initialData', () => {
    render(
      <Form
        ref={formRef}
        onSubmit={submitMock}
        initialData={{ 'test-picker': options[0].value }}
      >
        <Picker name="test-picker" options={options} />
      </Form>,
    );

    formRef.current?.submitForm();

    expect(submitMock).toReturnWith({ 'test-picker': options[0].value });
  });

  it('should be able to run onValueChange prop function', () => {
    const mockOnValueChange = jest.fn();

    const { getByTestId } = render(
      <Form ref={formRef} onSubmit={submitMock}>
        <Picker
          name="test-picker"
          options={options}
          onValueChange={mockOnValueChange}
        />
      </Form>,
    );

    fireEvent(getByTestId('picker'), 'onValueChange', options[0].value);

    expect(mockOnValueChange).toHaveBeenCalled();
  });
});
