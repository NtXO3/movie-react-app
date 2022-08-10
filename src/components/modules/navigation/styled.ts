import styled from "styled-components";

export const SidebarWrapper = styled.aside`
    width: 140px;
    max-width: 140px;
    padding: 1.5rem;
    height: 100vh;

    @media (max-width: 980px) {
        display: none;
    }
`

export const SidebarInnerContainer = styled.div`
    width: 100%;
    height: 100%;
    background-color: ${({ theme }) => theme.colors.background.accent};
    border-radius: ${({ theme }) => theme.ui.borderRadius.extraLarge};
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    padding: 2rem 0;
`

export const HeaderWrapper = styled.header`
    width: 100%;
    height: 60px;
    margin-bottom: 1rem;

    @media(min-width: 980px) {
        display: none;
    }
`

export const HeaderContainer = styled.div`
    width: 100%;
    height: 100%;
    background-color: ${({ theme }) => theme.colors.background.accent};
    border-radius: ${({ theme }) => theme.ui.borderRadius.extraLarge};
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem;
`

export const MobileLogo = styled.img`
    width: 28px;
`