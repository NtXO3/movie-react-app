import styled from "styled-components";

export const VideoModalWrapper = styled.div`
    position: fixed;
    top: 0;
    max-width: 720px;
    width: 100%;
    aspect-ratio: 16/9;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 10;
    overflow: hidden;
    padding: 1rem;
`

export const ModalOverlay = styled.div`
    position: fixed;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    backdrop-filter: blur(4px);
    z-index: 9;
`