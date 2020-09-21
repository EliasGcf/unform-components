import React from 'react';
import { Input as UInput, useError } from '@eliasgcf/unform-components-web';

const Input: React.FC = () => {
  const error = useError('teste');

  return (
    <>
      {error && <p>{error}</p>}
      <UInput name="teste" />
    </>
  );
};

export default Input;
