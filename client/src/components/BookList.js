// client/src/components/BookList.js

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import DeleteBookForm from './DeleteBookForm';
import UpdateBookForm from './UpdateBookForm'; // Import the UpdateBookForm component
import './BookList.css';

const BookList = () => {
  const [books, setBooks] = useState([]);
  const [selectedBook, setSelectedBook] = useState(null);

  useEffect(() => {
    fetchBooks();
  }, []);

  const fetchBooks = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/books');
      setBooks(response.data);
    } catch (error) {
      console.error('Error fetching books:', error);
    }
  };

  const handleDelete = async (bookId) => {
    try {
      await axios.delete(`http://localhost:5000/api/books/${bookId}`);
      fetchBooks(); // Update the book list after deletion
      setSelectedBook(null); // Close the update form after deletion
    } catch (error) {
      console.error('Error deleting book:', error);
    }
  };

  const handleUpdateClick = (book) => {
    setSelectedBook(book);
  };

  const handleCloseUpdateForm = () => {
    setSelectedBook(null);
    fetchBooks(); // Update the book list after updating
  };

  return (
    <div className="book-list" style={{ textAlign: 'center', maxWidth: '800px', margin: 'auto' }}>
      <h1 style={{ color: 'black' }}>Book List</h1>
      {books.length === 0 && <p>No books available.</p>}
      {books.map((book) => (
        <div key={book._id} className="book-item" style={{ backgroundImage: 'url(/LBW7.jpg)', textAlign: 'center', padding: '16px', borderRadius: '8px', marginBottom: '16px', width: '100%', maxWidth: '600px', margin: 'auto' }}>
          {book.image && <img src={book.image} alt={book.title} style={{ maxWidth: '100%', borderRadius: '4px', marginBottom: '8px' }} />}
          <h2>{book.title}</h2>
          <p style={{ fontWeight: 'bold' }}>Author: {book.author}</p>
          <p style={{ fontWeight: 'bold' }}>Genre: {book.genre}</p>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <button className="update-button" onClick={() => handleUpdateClick(book)}>
              Update
            </button>
            <DeleteBookForm bookId={book._id} onDelete={() => fetchBooks()} />
          </div>
          {selectedBook && selectedBook._id === book._id && (
            <UpdateBookForm
              bookId={selectedBook._id}
              onClose={handleCloseUpdateForm}
              onUpdate={fetchBooks}
            />
          )}
        </div>
      ))}
    </div>
  );
  
  
};

export default BookList;
