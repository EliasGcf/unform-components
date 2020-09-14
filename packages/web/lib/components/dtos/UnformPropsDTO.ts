import { UnformField } from '@unform/core';

export default interface UnformPropsDTO<DV = any> {
  fieldName: string;
  registerField: <T>(field: UnformField<T>) => void;
  defaultValue?: DV;
}
