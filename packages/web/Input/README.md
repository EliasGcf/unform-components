# @unform-components-web/input

## Installation

```bash
# With NPM
$ npm install @unform-components-web/input

# With Yarn
$ yarn add @unform-components-web/input
```

## Usage Example

```tsx
import React from 'react';
import { Form } from '@unform/web';
import Input from '@unform-components-web/input'

const App: React.FC = () => {
  function handleSubmit(data) {
    console.log(data);
    // { email: 'test@example.com' }
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Input name="email" />
      <button type="submit">Send</button>
    </Form>
  );
}

export default App;
```
