import styled, { css } from "styled-components";

export const TrendingContainer = styled.div`
    position: relative;

    &:hover > button {
        visibility: visible;
        opacity: 1;
    }
`

export const TrendingWrapper = styled.div`
    overflow-x: auto;
    white-space: nowrap;
    margin: 1rem 0;
    width: 100%;
    position: relative;
    scroll-behavior: smooth;

    &::-webkit-scrollbar {
        display: none;
    }
`

export const TrendingScrollButton = styled.button<TrendingScrollButtonProps>`
    width: 40px;
    aspect-ratio: 1/1;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 50%;
    transform: translate(0, -50%);
    z-index: 10;
    border-radius: 50%;
    background-color: rgba(255, 255, 255, 0.2);
    color: ${({ theme }) => theme.colors.white};
    border: none;
    font-size: 20px;
    cursor: pointer;
    visibility: hidden;
    opacity: 0;
    transition: all 300ms ease;

    ${({ position }) => position === 'right' && css`
        right: 16px;
    `}

    ${({ position }) => position === 'left' && css`
        left: 16px;
    `}

    &:hover {
        background-color: rgba(255, 255, 255, 0.4);
    }
`

type TrendingScrollButtonProps = {
    position: 'right' | 'left';
}