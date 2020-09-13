import { UnformField } from '@unform/core';

export default interface UnformPropsDTO {
  fieldName: string;
  registerField: <T>(field: UnformField<T>) => void;
  defaultValue?: any;
}
