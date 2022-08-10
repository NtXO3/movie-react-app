import styled from "styled-components";

export const Card = styled.div`
    background-color: ${({ theme }) => theme.colors.background.accent};
    padding: 2.5rem 2rem;
    width: 100%;
    max-width: 440px;
    border-radius: ${({ theme }) => theme.ui.borderRadius.large};
`