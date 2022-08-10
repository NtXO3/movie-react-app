import * as React from 'react';
import { useLocation } from 'react-router';
import { SidebarMenuItem, SidebarMenuWrapper, SidebarLogo } from './styled';
import AppLogo from '../../../../assets/Logo.svg'

export const SidebarMenu: React.FC<SidebarMenuProps> = ({ items, row }) => {
    const { pathname } = useLocation()

    return (
        <SidebarMenuWrapper row={row}>
            {!row && <SidebarLogo src={AppLogo} row={row}/>}
            {items.map((item, index) => (
                <SidebarMenuItem 
                    to={item.to} 
                    isActive={pathname === item.to || !!item.subPaths.find(item => item === pathname)}
                    key={index + 1}
                    row={row}
                >
                    {item.icon}
                </SidebarMenuItem>
                )
            )}
        </SidebarMenuWrapper>
    )
}

type SidebarMenuProps = {
    items: SidebarItems[];
    row?: boolean;
}

type SidebarItems = {
    icon: React.ReactElement
    to: string;
    subPaths: string[];
}