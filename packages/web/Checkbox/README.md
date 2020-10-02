# @unform-components-web/checkbox

## Installation

```bash
# With NPM
$ npm install @unform-components-web/checkbox

# With Yarn
$ yarn add @unform-components-web/checkbox
```

## Usage Example

```tsx
import React from 'react';
import { Form } from '@unform/web';
import Checkbox from '@unform-components-web/checkbox'

const App: React.FC = () => {
  const checkboxOptions = [
    { value: 'rocketseat', label: 'Rocketseat' },
    { value: 'eliasgcf', label: 'EliasGcf' },
  ];

  function handleSubmit(data) {
    console.log(data);
    // { users: ['rocketseat', 'eliasgcf'] }
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Checkbox name="users" options={checkboxOptions} />
      <button type="submit">Send</button>
    </Form>
  );
}
```

## InitialData Example

```tsx
import React from 'react';
import { Form } from '@unform/web';
import Checkbox from '@unform-components-web/checkbox';

const App: React.FC = () => {
  const checkboxOptions = [
    { value: 'rocketseat', label: 'Rocketseat' },
    { value: 'eliasgcf', label: 'EliasGcf' },
  ];

  function handleSubmit(data) {
    console.log(data);
    // { users: ['rocketseat'] }
  }

  return (
    <Form onSubmit={handleSubmit} initialData={{ users: ['rocketseat'] }}>
      <Checkbox name="users" options={checkboxOptions} />
      <button type="submit">Send</button>
    </Form>
  );
};
```

## SetValue Example

```tsx
import React, { useRef } from 'react';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';
import Checkbox from '@unform-components-web/checkbox';

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
    <Form ref={fomrRef} onSubmit={handleSubmit}>
      <Checkbox name="users" options={checkboxOptions} />
      <button
        type="button"
        onClick={() => formRef.current?.setFieldValue('users', ['eliasgcf'])}
      >
        SetValue
      </button>

      <button type="submit">Send</button>
    </Form>
  );
};
```
