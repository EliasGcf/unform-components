import React, { RefObject } from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import { Form } from '@unform/mobile';
import { FormHandles } from '@unform/core';

import { TextInput } from '@mobile';

const submitMock = jest.fn(data => data);

describe('TextInput', () => {
  it('should get the value on submitForm', () => {
    const formRef: RefObject<FormHandles> = { current: null };

    const { getByPlaceholderText } = render(
      <Form ref={formRef} onSubmit={submitMock}>
        <TextInput name="test-input" placeholder="placeholder-test" />
      </Form>,
    );

    fireEvent.changeText(getByPlaceholderText('placeholder-test'), 'John Doe');

    formRef.current?.submitForm();

    expect(submitMock).toReturnWith({ 'test-input': 'John Doe' });
  });

  it('should set the value on setValue function', () => {
    const formRef: RefObject<FormHandles> = { current: null };

    render(
      <Form ref={formRef} onSubmit={submitMock}>
        <TextInput name="test-input" />
      </Form>,
    );

    formRef.current?.setFieldValue('test-input', 'John Doe');
    formRef.current?.submitForm();

    expect(submitMock).toReturnWith({ 'test-input': 'John Doe' });
  });

  it('should clear the value on clearValue function', () => {
    const formRef: RefObject<FormHandles> = { current: null };

    render(
      <Form ref={formRef} onSubmit={submitMock}>
        <TextInput name="test-input" defaultValue="John Doe" />
      </Form>,
    );

    formRef.current?.clearField('test-input');
    formRef.current?.submitForm();

    expect(submitMock).toReturnWith({ 'test-input': '' });
  });

  it('should to receive the value from initialData', () => {
    const formRef: RefObject<FormHandles> = { current: null };

    render(
      <Form
        ref={formRef}
        onSubmit={submitMock}
        initialData={{
          'test-input': 'John Doe',
        }}
      >
        <TextInput name="test-input" />
      </Form>,
    );

    formRef.current?.submitForm();

    expect(submitMock).toReturnWith({ 'test-input': 'John Doe' });
  });

  it('should be able to run onChangeText function', () => {
    const mockOnChangeText = jest.fn();

    const { getByPlaceholderText } = render(
      <Form onSubmit={submitMock}>
        <TextInput
          name="test-input"
          placeholder="placeholder-test"
          onChangeText={mockOnChangeText}
        />
      </Form>,
    );

    fireEvent.changeText(getByPlaceholderText('placeholder-test'), 'John Doe');

    expect(mockOnChangeText).toHaveBeenCalledWith('John Doe');
  });
});
