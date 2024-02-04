import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import SearchBar from '../components/SearchBar';
import SearchResults from '../components/SearchResults';

export default function Search() {
    const [searchQuery, setSearchQuery] = useState('');

    const handleSearch = (query) => {
        setSearchQuery(query);
    };

    return (
        <Container>
            <SearchBar onSearch={handleSearch} />
            <SearchResults searchQuery={searchQuery} /> 
        </Container>
    );
}