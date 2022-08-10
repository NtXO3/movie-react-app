import styled from "styled-components";

export const SaveButtonStyled = styled.button`
    background-color: rgba(0, 0, 0, 0.3);
    color: ${({ theme }) => theme.colors.white};
    font-size: 16px;
    border-radius: ${({ theme }) => theme.ui.borderRadius.circle};
    position: absolute;
    width: 32px;
    aspect-ratio: 1/1;
    display: flex;
    justify-content: center;
    align-items: center;
    border: none;
    right: 16px;
    top: 16px;
    cursor: pointer;
    z-index: 2;

    &:hover {
        background-color: rgba(0, 0, 0, 0.6);
    }
`