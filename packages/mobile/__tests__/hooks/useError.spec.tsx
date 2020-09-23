import React, { RefObject } from 'react';
import { render, act } from '@testing-library/react-native';
import { FormHandles, Scope } from '@unform/core';
import { Form } from '@unform/mobile';

import { TextInput, useError } from '@mobile';

const formRef: RefObject<FormHandles> = { current: null };
let fieldError: string | undefined = '';

const InputError = () => {
  fieldError = useError('test-input');
  return <TextInput name="test-input" />;
};

describe('useError', () => {
  it('should get the error for used field', async () => {
    render(
      <Form ref={formRef} onSubmit={() => null}>
        <InputError />
      </Form>,
    );

    act(() => formRef.current?.setFieldError('test-input', 'test-error'));

    expect(fieldError).toBe('test-error');
  });

  it('should get the error whe usign scope', () => {
    render(
      <Form ref={formRef} onSubmit={() => null}>
        <Scope path="test-scope">
          <InputError />
        </Scope>
      </Form>,
    );

    act(() =>
      formRef.current?.setFieldError(
        'test-scope.test-input',
        'test-scope-error',
      ),
    );

    expect(fieldError).toBe('test-scope-error');
  });
});
