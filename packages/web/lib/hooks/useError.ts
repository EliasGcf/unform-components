import { FormContext } from '@unform/core';
import { useContext } from 'react';

export default function useError(name: string): string | undefined {
  const { errors, scopePath } = useContext(FormContext);

  return errors[scopePath ? `${scopePath}.${name}` : name];
}
