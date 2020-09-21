import React, { useRef } from 'react';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';
import { Checkbox } from '@eliasgcf/unform-components-web';
import Input from './components/Input';

const App: React.FC = () => {
  const formRef = useRef<FormHandles>(null);

  function handleSubmit() {
    formRef.current?.setFieldError('teste', 'ERROR');
  }

  return (
    <Form ref={formRef} onSubmit={handleSubmit}>
      <Input />
      <Checkbox
        name="profiles"
        options={[{ id: 'elias', value: 'Elias', label: 'ELIAS' }]}
      />
      <button type="submit">enviar</button>
    </Form>
  );
};

export default App;
