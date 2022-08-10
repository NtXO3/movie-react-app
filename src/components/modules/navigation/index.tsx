import * as React from 'react';
import { HeaderContainer, HeaderWrapper, MobileLogo, SidebarInnerContainer, SidebarWrapper } from './styled';
import { SidebarMenu } from './NavigationMenu';
import { AiFillAppstore } from 'react-icons/ai'
import { MdMovie, MdOndemandVideo } from 'react-icons/md'
import { RiBookmarkFill } from 'react-icons/ri'
import { SidebarBottom } from './NavigationAuth';
import AppLogo from '../../../assets/Logo.svg'

const menuItems = [
    {
        icon: <AiFillAppstore />,
        to: '/',
        subPaths: ['/search']
    },
    {
        icon: <MdMovie />,
        to: '/movies',
        subPaths: ['/movies/search']
    },
    {
        icon: <MdOndemandVideo />,
        to: '/series',
        subPaths: ['/series/search']
    },
    {
        icon: <RiBookmarkFill />,
        to: '/saved',
        subPaths: [],
    }
]

export const Sidebar: React.FC = () => {

    return (
        <SidebarWrapper>
            <SidebarInnerContainer>
                <SidebarMenu items={menuItems} />
                <SidebarBottom />
            </SidebarInnerContainer>
        </SidebarWrapper>
    )
};

export const MobileHeader: React.FC = () => {

    return (
        <HeaderWrapper>
            <HeaderContainer>
                <MobileLogo src={AppLogo} />
                <SidebarMenu items={menuItems} row/>
                <SidebarBottom row />
            </HeaderContainer>
        </HeaderWrapper>
    )
}