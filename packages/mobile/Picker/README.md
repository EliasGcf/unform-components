# @unform-components-mobile/picker

## Installation

⚠️ &nbsp;**First, you need to install [react-native-picker](https://github.com/react-native-community/react-native-picker) from react-native-community.**

```bash
# With NPM
$ npm install @unform-components-mobile/picker

# With Yarn
$ yarn add @unform-components-mobile/picker
```

## Usage Example

```tsx
import React, { useRef } from 'react';
import { Button } from 'react-native';
import { Form } from '@unform/mobile';
import { FormHandles } from '@unform/core';
import Picker, { PickerOption } from '@unform-components-mobile/picker';

const App: React.FC = () => {
  const formRef = useRef<FormHandles>(null);

  const pickerOptions: PickerOption[] = [
    { value: 'rocketseat', label: 'Rocketseat' },
    { value: 'eliasgcf', label: 'EliasGcf' },
  ];

  function handleSubmit(data) {
    console.log(data);
    // { user: 'rocketseat' }
  }

  return (
    <Form ref={formRef} onSubmit={handleSubmit}>
      <Picker name="user" options={pickerOptions} />
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
import Picker, { PickerOption } from '@unform-components-mobile/picker';

const App: React.FC = () => {
  const formRef = useRef<FormHandles>(null);

  const pickerOptions: PickerOption[] = [
    { value: 'rocketseat', label: 'Rocketseat' },
    { value: 'eliasgcf', label: 'EliasGcf' },
  ];

  function handleSubmit(data) {
    console.log(data);
    // { user: 'eliasgcf' }
  }

  return (
    <Form
      ref={formRef}
      onSubmit={handleSubmit}
      initialData={{ user: 'eliasgcf' }}
    >
      <Picker name="user" options={pickerOptions} />
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
import Picker, { PickerOption } from '@unform-components-mobile/picker';

const App: React.FC = () => {
  const formRef = useRef<FormHandles>(null);

  const pickerOptions: PickerOption[] = [
    { value: 'rocketseat', label: 'Rocketseat' },
    { value: 'eliasgcf', label: 'EliasGcf' },
  ];

  function handleSubmit(data) {
    console.log(data);
    // { user: 'eliasgcf' }
  }

  return (
    <Form ref={formRef} onSubmit={handleSubmit}>
      <Picker name="user" options={pickerOptions} />
      <Button
        title="SetValue"
        onPress={() => formRef.current?.setFieldValue('user', 'eliasgcf')}
      />

      <Button title="Send" onPress={() => formRef.current?.submitForm()} />
    </Form>
  );
}
```
