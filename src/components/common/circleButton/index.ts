import styled from "styled-components";

export const CircleButton = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 28px;
    aspect-ratio: 1;
    border-radius: 50%;
    background-color: ${({ theme }) => theme.colors.white};
    padding: 5px;
    border: none;
    margin-left: 8px;
    cursor: pointer;

    & > img {
        width: 100%;
    }
`