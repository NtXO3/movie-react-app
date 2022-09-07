import { InputProps } from 'types';
import * as React from 'react';
import { SearchInputWrapper, StyledSearchInput, SearchInputIcon } from './styled';
import { AiOutlineSearch } from 'react-icons/ai';

export const SearchInput: React.FC<InputProps & SearchInputProps> = ({ 
    placeholder, onSearch, onChange, value 
}) => {
    return (
        <SearchInputWrapper>
            <SearchInputIcon onClick={onSearch}>
                <AiOutlineSearch />
            </SearchInputIcon>
            <StyledSearchInput 
                placeholder={placeholder} 
                value={value}
                onChange={onChange}
                onKeyUp={(e) => e.key === 'Enter' && onSearch()}
            />
        </SearchInputWrapper>
    )
}

type SearchInputProps = {
    placeholder?: string;
    onSearch: () => void;
    onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void
}