import styled from "styled-components";
import { StyledPlayButton } from "../../../../../components/common/interaction/Play/styled";
import { ShowOverlay } from "../../../../../components/modules/movie/styled";
import { skeletonAnimation } from "../../../../../styles/animations";

export const TrendingShowWrapper = styled.div`
    position: relative;
    width: 470px;
    height: 230px;
    border-radius: ${({ theme }) => theme.ui.borderRadius.medium};
    display: inline-block;
    margin-right: 2rem;
    cursor: pointer;
    transition: all 300ms ease;

    &:hover > ${ShowOverlay} {
        background: linear-gradient(to bottom, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.8));
    }

    &:hover > ${StyledPlayButton} {
        visibility: visible;
        opacity: 1;
    }

    &:nth-last-child(1) {
        margin-right: 0;
    }

    @media (max-width: 760px) {
        width: 400px;
        height: 200px;
    }

    @media (max-width: 580px) {
        width: 320px;
        height: 150px;
    }
`

export const TrendingShowImg = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    position: absolute;
    border-radius: ${({ theme }) => theme.ui.borderRadius.medium};
`

export const TrendingShowDescription = styled.div`
    position: absolute;
    z-index: 2;
    bottom: 16px;
    left: 16px;

    & > h1 {
        white-space: pre-line;
    }
`

export const TrendingShowSkeleton = styled.div`
    width: 470px;
    height: 230px;
    background: rgba(255, 255, 255, 0.7) linear-gradient(90deg, transparent, transparent, rgba(255, 255, 255, 0.5), transparent, transparent);
    color: transparent;
    animation: ${skeletonAnimation} 1.5s linear infinite;
    cursor: default;
    border-radius: ${({ theme }) => theme.ui.borderRadius.large};
    pointer-events: none;
    user-select: none;
    margin-bottom: 16px;
`