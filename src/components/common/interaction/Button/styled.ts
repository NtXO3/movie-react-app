import styled, { css } from "styled-components";
import { LoaderAnimation } from "../../../../styles/animations";

export const ButtonLoader = styled.div<ButtonProps>`
    display: flex;

    & > div {
        width: 8px;
        aspect-ratio: 1/1;
        border-radius: ${({ theme }) => theme.ui.borderRadius.circle};
        background-color: rgba(255, 255, 255, 0.4);
        margin-right: 8px;
        animation: ${LoaderAnimation} 800ms infinite ease-in;

        ${({ variant }) => variant === 'secondary' && css`
            background-color: rgba(0, 0, 0, 0.3);
        `}
    }

    & > div:nth-child(1) {
        animation-delay: -0.18s;
    }

    & > div:nth-child(3) {
        animation-delay: 0.18s;
        margin-right: 0;
    }
`

export const StyledButton = styled.button<ButtonProps>`
    border: none;
    padding: 0.6rem 2rem;
    cursor: pointer;
    width: ${({ width }) => width || 'auto'};
    border-radius: ${({ theme }) => theme.ui.borderRadius.small};
    background-color: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.white};
    transition: background-color 250ms ease;
    margin-bottom: 1rem;
    height: 48px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 500;
    font-size: 15px;
    margin: ${({ margin }) => margin || '0'};

    &:hover {
        background-color: ${({ theme }) => theme.colors.primary.hover};
    }

    ${({ variant }) => variant === 'secondary' && css`
        background-color: ${({ theme }) => theme.colors.white};
        color: ${({ theme }) => theme.colors.background};

        &:hover {
            background-color: ${({ theme }) => theme.colors.white.dark};
        }
    `}
`

type ButtonProps = {
    variant?: 'primary' | 'secondary';
    isLoading?: boolean;
    width?: string;
    margin?: string;
}