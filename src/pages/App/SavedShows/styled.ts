import styled from "styled-components";

export const EmptyText = styled.p`
    font-size: 20px;
    color: ${({ theme }) => theme.colors.secondary};
    margin: 0.5rem 0;
    font-weight: 500;
`

export const EmptyWrapper = styled.div`
    margin-bottom: 2rem;
`