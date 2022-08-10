import * as React from 'react';
import { SidebarMenuItem } from '../NavigationMenu/styled';
import { BiLogOut } from 'react-icons/bi'
import { SidebarAuthContainer, SidebarUserProfile } from './styled';
import { UserAuth } from '../../../../context/AuthContext';
import { useNavigate } from 'react-router';

export const SidebarBottom: React.FC<SidebarBottomProps> = ({ row }) => {
    const { user, logOut } = UserAuth();
    const navigate = useNavigate()

    return (
        <SidebarAuthContainer row={row}>
            <SidebarMenuItem as="button" onClick={logOut} row={row}>
                <BiLogOut />
            </SidebarMenuItem>
            <SidebarUserProfile onClick={() => navigate('/my-account')} row={row}>
                {user?.email?.slice(0, 1).toUpperCase()}
            </SidebarUserProfile>
        </SidebarAuthContainer>
    )
}

type SidebarBottomProps = {
    row?: boolean;
}