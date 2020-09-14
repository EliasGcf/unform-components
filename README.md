# @eliasgcf/unform-components-(web || mobile)

> Made with create-react-library

## Install

### Web (ReactJS)

```bash
# With NPM
$ npm install @eliasgcf/unform-components-web

# With Yarn
$ yarn add @eliasgcf/unform-components-web
```

### Mobile (React Native)

```bash
# With NPM
$ npm install @eliasgcf/unform-components-mobile

# With Yarn
$ yarn add @eliasgcf/unform-components-mobile
```

## Usage

```tsx
import React from 'react';
import { Input as UInput} from '@eliasgcf/unform-components';
import { useField } from '@unform/core';

interface InputProps {
  name: string;
}

const Input: React.FC<InputProps> = ({ name }) => {
  const { fieldName, registerField, defaultValue = '', error } = useField(name);

  return (
    <>
      <UInput  name={name} unformProps={{ fieldName, registerField, defaultValue }} />
      {error && <p>{error}</p>}
    </>
  );
}

export default Input;
```

## License

MIT © [EliasGcf](https://github.com/EliasGcf)
