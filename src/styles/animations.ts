import { keyframes } from "styled-components";

export const LoaderAnimation = keyframes`
    0% {
        transform: scale(0);
    }
    50% {
        transform: scale(1);
    }
    100% {
        transform: scale(0);
    }
`

export const skeletonAnimation = keyframes`
    0% { 
        filter: opacity(0.7); 
    }
    50% {
        filter: opacity(1);
    }
    100% { 
        filter: opacity(0.7);
    }  
`;