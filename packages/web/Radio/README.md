# @unform-components-web/radio

## Installation

```bash
# With NPM
$ npm install @unform-components-web/radio

# With Yarn
$ yarn add @unform-components-web/radio
```

## Usage Example

```tsx
import React from 'react';
import { Form } from '@unform/web';
import Radio, { RadioOption } from '@unform-components-web/radio'

const App: React.FC = () => {
  const radioOptions: RadioOption[] = [
    { value: 'rocketseat', label: 'Rocketseat' },
    { value: 'eliasgcf', label: 'EliasGcf' },
  ];

  function handleSubmit(data) {
    console.log(data);
    // { user: 'rocketseat' }
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Radio name="user" options={radioOptions} />
      <button type="submit">Send</button>
    </Form>
  );
}
```

## InitialData Example

```tsx
import React from 'react';
import { Form } from '@unform/web';
import Radio, { RadioOption } from '@unform-components-web/radio'

const App: React.FC = () => {
  const radioOptions: RadioOption[] = [
    { value: 'rocketseat', label: 'Rocketseat' },
    { value: 'eliasgcf', label: 'EliasGcf' },
  ];

  function handleSubmit(data) {
    console.log(data);
    // { user: 'rocketseat' }
  }

  return (
    <Form onSubmit={handleSubmit} initialData={{ user: 'rocketseat' }}>
      <Radio name="user" options={radioOptions} />
      <button type="submit">Send</button>
    </Form>
  );
}
```

## SetValue Example

```tsx
import React from 'react';
import { Form } from '@unform/web';
import Radio, { RadioOption } from '@unform-components-web/radio'

const App: React.FC = () => {
  const radioOptions: RadioOption[] = [
    { value: 'rocketseat', label: 'Rocketseat' },
    { value: 'eliasgcf', label: 'EliasGcf' },
  ];

  function handleSubmit(data) {
    console.log(data);
    // { user: 'eliasgcf' }
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Radio name="user" options={radioOptions} />
      <button
        type="button"
        onClick={() => formRef.current?.setFieldValue('user', 'eliasgcf')}
      >
        SetValue
      </button>

      <button type="submit">Send</button>
    </Form>
  );
}
```
