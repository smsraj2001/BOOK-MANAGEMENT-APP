import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const UpdateBookForm = ({ bookId, onClose, onUpdate }) => {
  const navigate = useNavigate();
  const [updatedBook, setUpdatedBook] = useState({
    title: '',
    author: '',
    genre: '',
    image: '',
  });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchBookDetails = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/books/${bookId}`);
        setUpdatedBook(response.data);
      } catch (error) {
        console.error('Error fetching book details:', error);
      }
    };

    fetchBookDetails();
  }, [bookId]);

  const handleUpdate = async () => {
    setLoading(true);

    try {
      await axios.put(`http://localhost:5000/api/books/${bookId}`, updatedBook);
      onUpdate();
      navigate('/');
    } catch (error) {
      console.error('Error updating book:', error);
    } finally {
      setLoading(false);
      // Reset the updatedBook state to empty values
      setUpdatedBook({
        title: '',
        author: '',
        genre: '',
        image: '',
      });
    }
  };

  return (
    <div className="update-form" style={{ textAlign: 'center', maxWidth: '400px', margin: 'auto' }}>
      <h1 style={{ color: 'purple' }}>Update Book</h1>
      <label style={{ margin: '8px', textAlign: 'left', width: '100%' }}>
        Title:
        <input
          type="text"
          value={updatedBook.title}
          onChange={(e) => setUpdatedBook({ ...updatedBook, title: e.target.value })}
          style={{ marginLeft: '8px', padding: '8px', width: '100%', borderRadius: '4px', border: '1px solid #ccc' }}
        />
      </label>
      <label style={{ margin: '8px', textAlign: 'left', width: '100%' }}>
        Author:
        <input
          type="text"
          value={updatedBook.author}
          onChange={(e) => setUpdatedBook({ ...updatedBook, author: e.target.value })}
          style={{ marginLeft: '8px', padding: '8px', width: '100%', borderRadius: '4px', border: '1px solid #ccc' }}
        />
      </label>
      <label style={{ margin: '8px', textAlign: 'left', width: '100%' }}>
        Genre:
        <input
          type="text"
          value={updatedBook.genre}
          onChange={(e) => setUpdatedBook({ ...updatedBook, genre: e.target.value })}
          style={{ marginLeft: '8px', padding: '8px', width: '100%', borderRadius: '4px', border: '1px solid #ccc' }}
        />
      </label>
      <label style={{ margin: '8px', textAlign: 'left', width: '100%' }}>
        Image URL:
        <input
          type="text"
          value={updatedBook.image}
          onChange={(e) => setUpdatedBook({ ...updatedBook, image: e.target.value })}
          style={{ marginLeft: '8px', padding: '8px', width: '100%', borderRadius: '4px', border: '1px solid #ccc' }}
        />
      </label>
      {loading ? (
        <p style={{ margin: '16px', color: '#2ecc71' }}>Updating book...</p>
      ) : (
        <div style={{ marginTop: '16px' }}>
          <button
            onClick={handleUpdate}
            style={{
              backgroundColor: '#2ecc71',
              color: '#fff',
              padding: '12px 24px',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer',
              marginRight: '8px',
              fontWeight: 'bold',
            }}
          >
            Update Book
          </button>
          <button
            onClick={onClose}
            style={{
              backgroundColor: '#e74c3c',
              color: '#fff',
              padding: '12px 24px',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer',
              fontWeight: 'bold',
            }}
          >
            Cancel
          </button>
        </div>
      )}
    </div>
  );
};

export default UpdateBookForm;
