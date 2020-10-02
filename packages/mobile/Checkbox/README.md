# @unform-components-mobile/checkbox

## Installation

⚠️ &nbsp;**First, you need to install [react-native-checkbox](https://github.com/react-native-community/react-native-checkbox) from react-native-community.**

```bash
# With NPM
$ npm install @unform-components-mobile/checkbox

# With Yarn
$ yarn add @unform-components-mobile/checkbox
```

## Usage Example

```tsx
import React, { useRef } from 'react';
import { Button } from 'react-native';
import { Form } from '@unform/mobile';
import { FormHandles } from '@unform/core';
import Checkbox from '@unform-components-mobile/checkbox';

const App: React.FC = () => {
  const formRef = useRef<FormHandles>(null);

  const checkboxOptions = [
    { value: 'rocketseat', label: 'Rocketseat' },
    { value: 'eliasgcf', label: 'EliasGcf' },
  ];

  function handleSubmit(data) {
    console.log(data);
    // { users: ['rocketseat', 'eliasgcf'] }
  }

  return (
    <Form ref={formRef} onSubmit={handleSubmit}>
      <Checkbox name="users" options={checkboxOptions} />
      <Button title="Send" onPress={() => formRef.current?.submitForm()} />
    </Form>
  );
}
```

## InitialData Example

```tsx
import React, { useRef } from 'react';
import { Button } from 'react-native';
import { Form } from '@unform/mobile';
import { FormHandles } from '@unform/core';
import Checkbox from '@unform-components-mobile/checkbox';

const App: React.FC = () => {
  const formRef = useRef<FormHandles>(null);

  const checkboxOptions = [
    { value: 'rocketseat', label: 'Rocketseat' },
    { value: 'eliasgcf', label: 'EliasGcf' },
  ];

  function handleSubmit(data) {
    console.log(data);
    // { users: ['rocketseat'] }
  }

  return (
    <Form
      ref={formRef}
      onSubmit={handleSubmit}
      initialData={{ users: ['rocketseat'] }}
    >
      <Checkbox name="users" options={checkboxOptions} />
      <Button title="Send" onPress={() => formRef.current?.submitForm()} />
    </Form>
  );
}
```

## SetValue Example

```tsx
import React, { useRef } from 'react';
import { Button } from 'react-native';
import { Form } from '@unform/mobile';
import { FormHandles } from '@unform/core';
import Checkbox from '@unform-components-mobile/checkbox';

const App: React.FC = () => {
  const formRef = useRef<FormHandles>(null);

  const checkboxOptions = [
    { value: 'rocketseat', label: 'Rocketseat' },
    { value: 'eliasgcf', label: 'EliasGcf' },
  ];

  function handleSubmit(data) {
    console.log(data);
    // { users: ['eliasgcf'] }
  }

  return (
    <Form ref={formRef} onSubmit={handleSubmit}>
      <Checkbox name="users" options={checkboxOptions} />
      <Button
        title="SetValue"
        onPress={() => formRef.current?.setFieldValue('users', ['eliasgcf'])}
      />

      <Button title="Send" onPress={() => formRef.current?.submitForm()} />
    </Form>
  );
}
```
