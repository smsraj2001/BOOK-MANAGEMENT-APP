// client/src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import BookList from './components/BookList';
import AddBookForm from './components/AddBookForm';
import DeleteBookForm from './components/DeleteBookForm';
import UpdateBookForm from './components/UpdateBookForm'; 
import Header from './components/Header';
import './Header.css';  // Import the CSS file for styling
import './App.css'; 

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<BookList />} />
        <Route path="/add" element={<AddBookForm />} />
        <Route path="/delete" element={<DeleteBookForm />} />
        <Route path="/update" component={UpdateBookForm} /> {/* Add a route for UpdateBookForm */}
      </Routes>
    </Router>
  );
}

export default App;
