// // server/server.js
// const express = require('express');
// const mongoose = require('mongoose');
// const cors = require('cors');
// const bookRoutes = require('./routes/bookRoutes');

// const app = express();
// const PORT = process.env.PORT || 5000;

// app.use(cors());
// app.use(express.json()); // Use express.json() to handle JSON payloads

// // Connect to MongoDB with updated options
// mongoose.connect('mongodb://localhost:27017/book', {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
//   // Remove the useCreateIndex option
// });

// // Use routes
// app.use('/api/books', bookRoutes);

// // Start the server
// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });

// server/server.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const bookRoutes = require('./routes/bookRoutes'); // Import bookRoutes

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// MongoDB connection
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.connection.on('connected', () => {
  console.log('Connected to MongoDB');
});

// Use routes
app.use('/api/books', bookRoutes); // Use bookRoutes

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
