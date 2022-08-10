import { Link } from "react-router-dom";
import styled, { css } from "styled-components";

export const SidebarMenuWrapper = styled.div<SidebarMenuItemProps>`
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;

    ${({ row }) => row && css`
        flex-direction: row;
        position: absolute;
        left: 50%;
        transform: translate(-50%);
    `}
`

export const SidebarMenuItem = styled(Link)<SidebarMenuItemProps>`
    text-decoration: none;
    color: ${({ theme }) => theme.colors.secondary};
    font-size: 24px;
    margin: 0 0 1.5rem 0;
    cursor: pointer;
    transition: color 300ms ease;
    background-color: transparent;
    border: none;
    display: flex;
    justify-content: center;
    align-items: center;

    ${({ row }) => row && css`
        margin: 0 1rem 0 0;

        :nth-last-child(1) {
            margin-right: 0;
        }
    `}

    @media(max-width: 980px) {
        font-size: 24px;
    }

    &:hover {
        color: ${({ theme }) => theme.colors.white};
    }

    ${({ isActive }) => isActive && css`
        color: ${({ theme }) => theme.colors.white};
    `}
`

export const SidebarLogo = styled.img<SidebarMenuItemProps>`
    width: 32px;
    margin-bottom: 3rem;
`

type SidebarMenuItemProps = {
    isActive?: boolean;
    row?: boolean;
}