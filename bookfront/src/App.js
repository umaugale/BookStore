import React from 'react';
import { BookProvider } from './Component/BookC';
import BookList from './Component/BookList';
import BookForm from './Component/Form';
import { Container } from '@mui/material';

const App = () => {
    return (
        <BookProvider>
            <Container maxWidth="sm">
                <h1>Book Management</h1>
                <BookForm />
                <BookList />
            </Container>
        </BookProvider>
    );
};

export default App;

