import styled from "styled-components";
import { LoaderAnimation } from "../../../styles/animations";

export const LoadingScreen = styled.div`
    background-color: rgb(16, 20, 30);
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 10;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
`

export const ScreenLoader = styled.div`
    display: flex;

    & > div {
        width: 32px;
        aspect-ratio: 1/1;
        border-radius: 50%;
        background-color: rgba(255, 255, 255, 0.4);
        margin-right: 16px;
        animation: ${LoaderAnimation} 800ms infinite ease-in;
    }

    & > div:nth-child(1) {
        animation-delay: -0.18s;
    }

    & > div:nth-child(3) {
        animation-delay: 0.18s;
        margin-right: 0;
    }
`