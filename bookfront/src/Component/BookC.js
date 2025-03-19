import React, { createContext, useContext, useEffect, useState } from 'react';
import axios from 'axios';

const API_URL = 'http://localhost:5000/books'; // Update with your backend API URL

const BookContext = createContext();

export const BookProvider = ({ children }) => {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        fetchBooks();
    }, []);

    const fetchBooks = async () => {
        try {
            const response = await axios.get("http://localhost:5000/books", {
                headers: {
                    "Content-Type": "application/json"
                },
                withCredentials: false 
            });
            console.log("Fetched books:", response.data); // Debugging
            setBooks(response.data);
        } catch (error) {
            if (error.response) {
                console.error("Server responded with error:", error.response.status, error.response.data);
            } else if (error.request) {
                console.error("No response received:", error.request);
            } else {
                console.error("Axios error:", error.message);
            }
        }
    };
    
    
    

    const addBook = async (book) => {
        try {
            const response = await axios.post("http://localhost:5000/books", book, {
                headers: {
                    "Content-Type": "application/json"
                },
                withCredentials: false 
            });
            console.log("Book added successfully:", response.data);
            setBooks([...books, response.data]);
        } catch (error) {
            if (error.response) {
                console.error("Server responded with error:", error.response.status, error.response.data);
            } else if (error.request) {
                console.error("No response received:", error.request);
            } else {
                console.error("Axios error:", error.message);
            }
        }
    };
    

    return (
        <BookContext.Provider value={{ books, addBook }}>
            {children}
        </BookContext.Provider>
    );
};

export const useBooks = () => useContext(BookContext);