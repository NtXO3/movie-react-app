import styled from "styled-components";

import { SkeletonCss } from "../../common/skeleton";

export const SkeletonImg = styled.div`
    width: 100%;
    aspect-ratio: 5/3;
    ${SkeletonCss};
    cursor: default;
    border-radius: ${({ theme }) => theme.ui.borderRadius.large};
    pointer-events: none;
    user-select: none;
    margin-bottom: 16px;
`

export const SkeletonTitle = styled.div<SkeletonTitleProps>`
    width: ${({ width }) => width};
    height: ${({ height }) => height};
    margin: ${({ margin }) => margin || '0'};
    ${SkeletonCss};
    cursor: default;
    border-radius: ${({ theme }) => theme.ui.borderRadius.medium};
    pointer-events: none;
    user-select: none;
`

type SkeletonTitleProps = {
    width: string;
    height: string;
    margin?: string;
}