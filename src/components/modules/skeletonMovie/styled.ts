import styled from "styled-components";
import { skeletonAnimation } from "../../../styles/animations";

export const SkeletonImg = styled.div`
    width: 100%;
    aspect-ratio: 5/3;
    background: rgba(255, 255, 255, 0.7) linear-gradient(90deg, transparent, transparent, rgba(255, 255, 255, 0.5), transparent, transparent);
    color: transparent;
    animation: ${skeletonAnimation} 1.5s linear infinite;
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
    background: #efefef linear-gradient(90deg, transparent, transparent, #dfdfdf, transparent, transparent);
    color: transparent;
    animation: ${skeletonAnimation} 1.5s linear infinite;
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