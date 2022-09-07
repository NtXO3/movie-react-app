import styled from "styled-components";
import { Text } from "common/typography";

export const AuthPageWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 6rem 0;
    width: 100%;
`

export const Logo = styled.img`
    width: 40px;
    margin-bottom: 6rem;
`

export const FormLink = styled(Text)`
    text-align: center;
    width: 100%;
    display: flex;
    justify-content: center;

    & > span {
        color: ${({ theme }) => theme.colors.primary};
        margin-left: 4px;
        cursor: pointer;
        transition: all 250ms ease;

        &:hover {
            color: ${({ theme }) => theme.colors.primary.hover};
        }
    }
`