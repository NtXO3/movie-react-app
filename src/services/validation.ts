import { ValidationRule, Validate } from 'react-hook-form';

type ValidationMap = {
  [name: string]: Validate<string> | ValidationRule | Record<string, ValidationRule>;
};

const createValidationMap = <T extends ValidationMap>(validation: T) => validation;

export const validation = createValidationMap({
  required: {
    required: 'This field is required',
  },
  email: {
    pattern: {
      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
      message: 'Email address is invalid',
    },
  },
  password: {
    minLength: {
      value: 8,
      message: 'Password needs to contain at least 8 characters',
    },
  },
});
