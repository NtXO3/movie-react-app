import styled, { css } from "styled-components";

export const SidebarAuthContainer = styled.div<SidebarAuthProps>`
    height: auto;
    display: flex;
    flex-direction: column;
    justify-content: end;

    ${({ row }) => row && css`
        flex-direction: row;
    `}
`

export const SidebarUserProfile = styled.button<SidebarAuthProps>`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 36px;
    aspect-ratio: 1/1;
    background-color: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.white};
    font-weight: 700;
    font-size: 16px;
    border: none;
    border-radius: ${({ theme }) => theme.ui.borderRadius.circle};
    cursor: pointer;

    @media(max-width: 980px) {
        width: 32px;
        font-size: 14px;
    }
`

type SidebarAuthProps = {
    row?: boolean;
}