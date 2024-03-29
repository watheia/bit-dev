import React from 'react';
import { SearchInput } from './search-input';

export const BasicSearchInput = () => <SearchInput />;

export const SearchInputWithValue = () => <SearchInput value="search" data-testid="search-input" />;
