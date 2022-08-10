import styled, { css } from "styled-components";
import { InputProps } from "../../../../types/input";

export const InputWrapper = styled.div<Pick<InputProps, 'width' | 'isError' | 'margin'>>`
    width: ${({ width }) => width || 'auto'};
    position: relative;
    margin: ${({ margin }) => margin};
`

export const StyledInput = styled.input<InputProps>`
    background-color: transparent;
    border: none;
    outline: none;
    border-bottom: 2px solid ${({ theme }) => theme.colors.secondary};
    caret-color: ${({ theme }) => theme.colors.primary};
    padding: 0.8rem 0.8rem;
    color: ${({ theme }) => theme.colors.white};
    width: 100%;
    font-weight: 500;
    letter-spacing: 0.5px;
    transition: border 300ms ease;
    font-size: 14px;

    &::placeholder {
        color: rgba(255, 255, 255, 0.5);
        font-weight: 400;
    }

    &:focus, &:hover {
        border-color: rgba(255, 255, 255, 0.7);
    }

    ${({ isError }) => isError && css`
        border-color: ${({ theme }) => theme.colors.primary};
    `}
`

export const InputError = styled.p`
    margin-top: 4px;
    color: ${({ theme }) => theme.colors.primary};
    font-size: 13px;
    position: absolute;
`

export const InputErrorIcon = styled.div`
    position: absolute;
    font-size: 18px;
    aspect-ratio: 1/1;
    right: 0;
    top: 50%;
    transform: translate(0, -50%);
    color: ${({ theme }) => theme.colors.primary};
`