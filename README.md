# @eliasgcf/unform-components-(web || mobile)

<h2 align="center">🚧 Under development 🚧</h2>

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
import { Input as UInput, useError } from '@eliasgcf/unform-components-web';

interface InputProps {
  name: string;
}

const Input: React.FC<InputProps> = ({ name }) => {
  const error = useError(name);

  return (
    <>
      <UInput  name={name} />
      {error && <p>{error}</p>}
    </>
  );
}

export default Input;
```

## License

MIT © [EliasGcf](https://github.com/EliasGcf)
