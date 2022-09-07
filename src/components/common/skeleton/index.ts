import { css, keyframes } from "styled-components";

const skeletonAnimation = keyframes`
    from {
        background-position: 100%;
    }
    to {
        background-position: 0%;
    }
`

export const SkeletonCss = css`
    background-image: linear-gradient(
        90deg,
        #555861 0%, #555861 40%,
        #3c3f47 50%, #3c3f47 55%,
        #555861 65%, #555861 100%
    );
    background-size: 400%;
    animation: ${skeletonAnimation} 1.8s infinite linear;
`