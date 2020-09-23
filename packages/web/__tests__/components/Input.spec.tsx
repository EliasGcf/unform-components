import React, { RefObject } from 'react';
import { fireEvent, render } from '@testing-library/react';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';

import { Input } from '@web';

const submitMock = jest.fn(data => data);
const formRef: RefObject<FormHandles> = { current: null };

describe('Input', () => {
  it('should get the value on submitForm', () => {
    const { getByPlaceholderText } = render(
      <Form ref={formRef} onSubmit={submitMock}>
        <Input name="test-input" placeholder="placeholder-test" />
      </Form>,
    );

    fireEvent.change(getByPlaceholderText('placeholder-test'), {
      target: {
        value: 'John Doe',
      },
    });

    formRef.current?.submitForm();

    expect(submitMock).toReturnWith({ 'test-input': 'John Doe' });
  });

  it('should set the value on setValue function', () => {
    render(
      <Form ref={formRef} onSubmit={submitMock}>
        <Input name="test-input" />
      </Form>,
    );

    formRef.current?.setFieldValue('test-input', 'John Doe');
    formRef.current?.submitForm();

    expect(submitMock).toReturnWith({ 'test-input': 'John Doe' });
  });

  it('should clear the value on clearValue function', () => {
    render(
      <Form ref={formRef} onSubmit={submitMock}>
        <Input name="test-input" defaultValue="John Doe" />
      </Form>,
    );

    expect(formRef.current?.getFieldValue('test-input')).toBe('John Doe');

    formRef.current?.clearField('test-input');
    formRef.current?.submitForm();

    expect(submitMock).toReturnWith({ 'test-input': '' });
  });

  it('should to receive the value from initialData', () => {
    render(
      <Form
        ref={formRef}
        onSubmit={submitMock}
        initialData={{
          'test-input': 'John Doe',
        }}
      >
        <Input name="test-input" />
      </Form>,
    );

    formRef.current?.submitForm();

    expect(submitMock).toReturnWith({ 'test-input': 'John Doe' });
  });
});
