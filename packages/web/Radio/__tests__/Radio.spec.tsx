import React, { RefObject } from 'react';
import { fireEvent, render } from '@testing-library/react';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';

import Radio, { RadioOption } from '@web/Radio';

const submitMock = jest.fn(data => data);
const formRef: RefObject<FormHandles> = { current: null };
const options: RadioOption[] = [
  { value: 'value-1', label: 'Value 1' },
  { value: 'value-2', label: 'Value 2' },
];

describe('Radio', () => {
  it('should get the value on submitForm', () => {
    const { getByLabelText } = render(
      <Form ref={formRef} onSubmit={submitMock}>
        <Radio name="test-input" options={options} />
      </Form>,
    );

    fireEvent.click(getByLabelText('Value 1'));

    formRef.current?.submitForm();

    expect(submitMock).toReturnWith({ 'test-input': options[0].value });
  });

  it('should set the value on setValue function', () => {
    render(
      <Form ref={formRef} onSubmit={submitMock}>
        <Radio name="test-input" options={options} />
      </Form>,
    );

    formRef.current?.setFieldValue('test-input', options[0].value);

    formRef.current?.submitForm();

    expect(submitMock).toReturnWith({ 'test-input': options[0].value });
  });

  it('should clear the value on clearValue function', () => {
    render(
      <Form
        ref={formRef}
        onSubmit={submitMock}
        initialData={{ 'test-input': options[0].value }}
      >
        <Radio name="test-input" options={options} />
      </Form>,
    );

    expect(formRef.current?.getFieldValue('test-input')).toBe(options[0].value);

    formRef.current?.clearField('test-input');
    formRef.current?.submitForm();

    expect(submitMock).toReturnWith({ 'test-input': '' });
  });

  it('should to receive the valeu from initialData', () => {
    render(
      <Form
        ref={formRef}
        onSubmit={submitMock}
        initialData={{ 'test-input': options[0].value }}
      >
        <Radio name="test-input" options={options} />
      </Form>,
    );

    formRef.current?.submitForm();
    expect(submitMock).toReturnWith({ 'test-input': options[0].value });
  });
});
