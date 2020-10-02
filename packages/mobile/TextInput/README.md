# @unform-components-mobile/text-input

## Installation

```bash
# With NPM
$ npm install @unform-components-mobile/text-input

# With Yarn
$ yarn add @unform-components-mobile/text-input
```

## Usage Example

```tsx
import React, { useRef } from 'react';
import { Button } from 'react-native';
import { Form } from '@unform/mobile';
import { FormHandles } from '@unform/core';
import TextInput from '@unform-components-mobile/text-input';

const App: React.FC = () => {
  const formRef = useRef<FormHandles>(null);

  function handleSubmit(data) {
    console.log(data);
    // { email: 'test@example.com' }
  }

  return (
    <Form ref={formRef} onSubmit={handleSubmit}>
      <TextInput name="email" />
      <Button title="Send" onPress={() => formRef.current?.submitForm()} />
    </Form>
  );
}
```
