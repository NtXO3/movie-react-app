import styled from "styled-components";

export const StyledPlayButton = styled.button`
    background-color: rgba(200, 200, 200, 0.4);
    padding: 0.5rem 1rem;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border: none;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: ${({ theme }) => theme.ui.borderRadius.extraLarge};
    color: #fff;
    font-size: 16px;
    font-weight: 600;
    z-index: 4;
    cursor: pointer;
    visibility: hidden;
    opacity: 0;
    transition: all 200ms ease;

    & > svg {
        margin-right: 8px;
        font-size: 28px;
    }

    &:hover {
        background-color: rgba(140, 140, 140, 0.5);
    }
`

export const PlayButtonIcon = styled.div`

`