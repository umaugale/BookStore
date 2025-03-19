import React, { useState } from 'react';
import { useBooks } from './BookC'
import { TextField, Button } from '@mui/material';

const BookForm = () => {
    const { addBook } = useBooks();
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (title && author) {
            addBook({ title, author });
            setTitle('');
            setAuthor('');
        }
    };

    return (
        <form onSubmit={handleSubmit} style={{ marginBottom: '20px' }}>
            <TextField label="Title" value={title} onChange={(e) => setTitle(e.target.value)} fullWidth margin="normal" />
            <TextField label="Author" value={author} onChange={(e) => setAuthor(e.target.value)} fullWidth margin="normal" />
            <Button type="submit" variant="contained" color="primary" fullWidth>
                Add Book
            </Button>
        </form>
    );
};

export default BookForm;
