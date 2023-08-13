import * as React from "react";
import { InputProps } from "types/input";
import {
  InputError,
  InputErrorIcon,
  InputWrapper,
  StyledInput,
} from "./styled";
import { MdOutlineError } from "react-icons/md";

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      width,
      placeholder,
      disabled,
      isError,
      value,
      onChange,
      error,
      type,
      margin = "0",
      ...otherProps
    },
    ref
  ) => {
    return (
      <InputWrapper width={width} isError={isError} margin={margin}>
        <StyledInput
          placeholder={placeholder}
          disabled={disabled}
          isError={isError}
          value={value}
          onChange={onChange}
          type={type}
          ref={ref}
          {...otherProps}
        />
        {isError && (
          <>
            <InputError>{error.message}</InputError>
            <InputErrorIcon>
              <MdOutlineError />
            </InputErrorIcon>
          </>
        )}
      </InputWrapper>
    );
  }
);
