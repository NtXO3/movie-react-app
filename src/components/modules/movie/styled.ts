import styled from "styled-components"
import { StyledPlayButton } from "../../common/interaction/Play/styled";

export const ShowTags = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 4px;
`

export const ShowDot = styled.div`
    width: 4px;
    margin: 0 8px;
    aspect-ratio: 1/1;
    background-color: ${({ theme }) => theme.colors.white};
    filter: opacity(0.6);
    border-radius: ${({ theme }) => theme.ui.borderRadius.circle};
`

export const ShowWrapper = styled.div`
    width: 25%;
    padding: 2rem 2.25rem 2rem 0;

    @media (max-width: 1000px) {
        width: calc(100% / 3);
    }

    @media (max-width: 760px) {
        width: 50%;
    }

    @media (max-width: 580px) {
        width: 100%;
        padding: 1rem 0;
    }
`

export const ShowOverlay = styled.div`
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    z-index: 1;
    background: linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.5));
    border-radius: ${({ theme }) => theme.ui.borderRadius.medium};
    transition: all 300ms ease;
`;

export const ShowImgWrapper = styled.div`
    width: 100%;
    aspect-ratio: 5/3;
    line-height: 0;
    margin-bottom: 8px;
    position: relative;
    cursor: pointer;

    &:hover > ${ShowOverlay} {
        background: linear-gradient(to bottom, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.8));
    }

    &:hover > ${StyledPlayButton} {
        visibility: visible;
        opacity: 1;
    }
`

export const ShowImg = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: ${({ theme }) => theme.ui.borderRadius.medium};
`

export const ShowDescription = styled.div`

`