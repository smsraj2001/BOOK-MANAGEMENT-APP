import React, { useState } from 'react';
import axios from 'axios';
// const dotenv = require('dotenv');
// dotenv.config();

const AddBookForm = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [genre, setGenre] = useState('Fiction'); // Default genre
  const [image, setImage] = useState('');

  const genres = ['Fiction', 'Non-Fiction', 'Science Fiction', 'Mystery', 'Fantasy', 'Biography', 'History', 'Self-Help'];

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // await axios.post('http://localhost:5000/api/books', { title, author, genre, image });
      await axios.post(`${process.env.REACT_APP_API_BASE_URL}/api/books`, { title, author, genre, image });
       // Clear the input fields after successfully adding a book
      setTitle('');
      setAuthor('');
      setGenre('Fiction'); // Reset to the default genre
      setImage('');
    } catch (error) {
      console.error('Error adding book:', error);
      // Handle error, show an error message to the user
    }
  };

  return (
    <div style={{ textAlign: 'center', maxWidth: '400px', margin: 'auto' }}>
      <h1 style={{ color: 'purple' }}>Add New Book</h1>
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <label style={{ margin: '8px', textAlign: 'left', width: '100%' }}>
          <h3 style={{ color: "#333333" }}>Title :</h3>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            style={{ marginLeft: '8px', padding: '8px', width: '100%', borderRadius: '4px', border: '1px solid #ccc' }}
          />
        </label>
        <label style={{ margin: '8px', textAlign: 'left', width: '100%' }}>
        <h3 style={{ color: "#333333" }}>Author :</h3>
          <input
            type="text"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            style={{ marginLeft: '8px', padding: '8px', width: '100%', borderRadius: '4px', border: '1px solid #ccc' }}
          />
        </label>
        <label style={{ margin: '8px', textAlign: 'left', width: '100%' }}>
        <h3 style={{ color: "#333333" }}>Genre :</h3>
          <select
            value={genre}
            onChange={(e) => setGenre(e.target.value)}
            style={{ marginLeft: '8px', padding: '8px', width: '100%', borderRadius: '4px', border: '1px solid #ccc' }}
          >
            {genres.map((genre) => (
              <option key={genre} value={genre}>
                {genre}
              </option>
            ))}
          </select>
        </label>
        <label style={{ margin: '8px', textAlign: 'left', width: '100%' }}>
        <h3 style={{ color: "#333333" }}>Image URL :</h3>
          <input
            type="text"
            value={image}
            onChange={(e) => setImage(e.target.value)}
            style={{ marginLeft: '8px', padding: '8px', width: '100%', borderRadius: '4px', border: '1px solid #ccc' }}
          />
        </label>
        <button
          type="submit"
          style={{
            backgroundColor: '#2ecc71',
            color: '#fff',
            padding: '12px 24px',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
            marginTop: '16px',
            fontWeight: 'bold',
          }}
        >
          Add Book
        </button>
      </form>
    </div>
  );
};

export default AddBookForm;
