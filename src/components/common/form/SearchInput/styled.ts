import styled from "styled-components";
import { StyledInput } from "../input/styled";

export const SearchInputWrapper = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    margin-bottom: 2rem;
`

export const StyledSearchInput = styled(StyledInput)`
    width: 100%;
    padding: 0.7rem 0;
    font-size: 17px;

    &::placeholder {
        font-size: 15px;
    }

    & > svg {
        font-size: 24px;
        color: #fff;
    }
`

export const SearchInputIcon = styled.button`
    color: ${({ theme }) => theme.colors.white};
    font-size: 32px;
    margin-right: 1rem;
    background-color: transparent;
    padding-top: 8px;
    border: none;
    cursor: pointer;
    transition: filter 250ms ease;

    &:hover {
        filter: opacity(0.8)
    }
`