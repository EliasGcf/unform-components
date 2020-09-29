import React, { RefObject } from 'react';
import { render, act, fireEvent } from '@testing-library/react-native';
import { Form } from '@unform/mobile';
import { FormHandles } from '@unform/core';

import Checkbox, { CheckboxOption } from '@mobile/Checkbox';

const submitMock = jest.fn(data => data);
const formRef: RefObject<FormHandles> = { current: null };
const options: CheckboxOption[] = [
  { value: 'value-1', label: 'Value 1' },
  { value: 'value-2', label: 'Value 2' },
];

describe('Checkbox', () => {
  it('should get the value on submitForm', () => {
    const { getByTestId } = render(
      <Form ref={formRef} onSubmit={submitMock}>
        <Checkbox name="test-input" options={options} />
      </Form>,
    );

    fireEvent(getByTestId('checkbox-0'), 'onValueChange', {
      nativeEvent: { value: true },
    });

    formRef.current?.submitForm();
    expect(submitMock).toReturnWith({ 'test-input': [options[0].value] });

    fireEvent(getByTestId('checkbox-0'), 'onValueChange', {
      nativeEvent: { value: false },
    });

    formRef.current?.submitForm();
    expect(submitMock).toReturnWith({ 'test-input': [] });
  });

  it('should set the value on setValue function', () => {
    render(
      <Form ref={formRef} onSubmit={submitMock}>
        <Checkbox name="test-input" options={options} />
      </Form>,
    );

    act(() => formRef.current?.setFieldValue('test-input', [options[0].value]));
    formRef.current?.submitForm();

    expect(submitMock).toReturnWith({ 'test-input': [options[0].value] });
  });

  it('should clear the value on clearValue function', () => {
    render(
      <Form
        ref={formRef}
        onSubmit={submitMock}
        initialData={{ 'test-input': [options[0].value] }}
      >
        <Checkbox name="test-input" options={options} />
      </Form>,
    );

    expect(formRef.current?.getFieldValue('test-input')).toMatchObject([
      options[0].value,
    ]);

    act(() => formRef.current?.clearField('test-input'));

    formRef.current?.submitForm();

    expect(submitMock).toReturnWith({ 'test-input': [] });
  });

  it('should to receive the value from initialData', () => {
    render(
      <Form
        ref={formRef}
        onSubmit={submitMock}
        initialData={{
          'test-input': [options[0].value],
        }}
      >
        <Checkbox name="test-input" options={options} />
      </Form>,
    );

    formRef.current?.submitForm();

    expect(submitMock).toReturnWith({ 'test-input': [options[0].value] });
  });

  it('should be able to run onValueChange prop function', () => {
    const mockOnValueChange = jest.fn();

    const { getByTestId } = render(
      <Form ref={formRef} onSubmit={submitMock}>
        <Checkbox
          name="test-input"
          options={options}
          onValueChange={mockOnValueChange}
        />
      </Form>,
    );

    fireEvent(getByTestId('checkbox-0'), 'onValueChange', {
      nativeEvent: { value: true },
    });

    formRef.current?.submitForm();
    expect(mockOnValueChange).toHaveBeenCalledWith(true);
  });
});
