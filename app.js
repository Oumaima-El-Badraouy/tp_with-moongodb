// Import the required modules
const express = require('express');
const mongoose = require('mongoose'); // Importing Mongoose for MongoDB connection

// Import your User model (if you have a model in `models/user.js`)
const User = require('./models/user'); // Adjust the path if needed

// Initialize the Express application
const app = express();
const port = 3000; // Define the port directly in the code

// Define MongoDB URI directly in the code
const mongoUri = 'mongodb://127.0.0.1:27017/yourDatabaseName'; // Replace with your actual database name

// Middleware
app.use(express.json());

// Connect to MongoDB using Mongoose without deprecated options
mongoose.connect(mongoUri)
.then(() => {
  console.log('Connected to MongoDB');
})
.catch((error) => {
  console.error('Error connecting to MongoDB:', error);
});

// Define a test route
app.get('/', (req, res) => {
  res.send('Server is up and running');
});

// Start the Express server
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
