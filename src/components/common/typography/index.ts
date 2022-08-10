import styled, { css } from "styled-components";

export const Heading = styled.h1<HeadingProps>`
    color: ${({ theme }) => theme.colors.white};
    
    ${({ size }) => size === 'l' && css`
        font-size: 32px;
        font-weight: 600;

        @media (max-width: 680px) {
            font-size: 28px;
        }
    `};

    ${({ size}) => size === 'm' && css`
        font-size: 24px;
        font-weight: 500;
        
        @media(max-width: 1200px) {
            font-size: 20px;
        }
    `};

    ${({ size }) => size === 's' && css`
        font-size: 24px;
        font-weight: 600;

        @media(max-width: 1200px) {
            font-size: 20px;
        }
    `};

    ${({ size }) => size === 'xs' && css`
        font-weight: 600;
        font-size: 18px;
    `};
`;

type HeadingProps = {
    size: 'l' | 'm' | 's' | 'xs'
};

export const Text = styled.p<TextProps>`
    color: rgba(255, 255, 255, 0.9);
    line-height: 1.5;
    font-size: 15px;
    max-width: ${({ maxWidth }) => maxWidth || '100%'};
    display: flex;
    align-items: center;

    & > svg {
        margin-right: 4px;
    }

    ${({ size }) => size === 's' && css`
        color: rgba(255, 255, 255, 0.7);
        font-size: 13px;
    `}
`;

type TextProps = {
    size: 'm' | 's';
    maxWidth?: string;
};