import React, { RefObject } from 'react';
import { fireEvent, render } from '@testing-library/react';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';

import { Checkbox, CheckboxOption } from '@web';

const submitMock = jest.fn(data => data);
const formRef: RefObject<FormHandles> = { current: null };
const options: CheckboxOption[] = [
  { id: 'value-1', value: 'value-1', label: 'Value 1' },
  { id: 'value-2', value: 'value-2', label: 'Value 2' },
];

describe('Checkbox', () => {
  it('should get the value on submitForm', () => {
    const { getByLabelText } = render(
      <Form ref={formRef} onSubmit={submitMock}>
        <Checkbox name="test-input" options={options} />
      </Form>,
    );

    fireEvent.click(getByLabelText('Value 1'));

    formRef.current?.submitForm();

    expect(submitMock).toReturnWith({ 'test-input': [options[0].value] });
  });

  it('should set the value on setValue function', () => {
    render(
      <Form ref={formRef} onSubmit={submitMock}>
        <Checkbox name="test-input" options={options} />
      </Form>,
    );

    formRef.current?.setFieldValue('test-input', [options[0].value]);
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

    formRef.current?.clearField('test-input');
    formRef.current?.submitForm();

    expect(submitMock).toReturnWith({ 'test-input': [] });
  });

  it('should to receive the value from initialData', () => {
    render(
      <Form
        ref={formRef}
        onSubmit={submitMock}
        initialData={{ 'test-input': [options[0].value, options[1].value] }}
      >
        <Checkbox name="test-input" options={options} />
      </Form>,
    );

    formRef.current?.submitForm();

    expect(submitMock).toReturnWith({
      'test-input': [options[0].value, options[1].value],
    });
  });
});
