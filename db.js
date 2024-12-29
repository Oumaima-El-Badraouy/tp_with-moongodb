const mongoose = require('mongoose');

// Connect to MongoDB
const connectDB = async () => {
    try {
        await mongoose.connect('mongodb://localhost/my_database'); // Supprimez les options obsolètes
        console.log('MongoDB connected...');
    } catch (err) {
        console.error('Error connecting to MongoDB:', err);
    }
};

// Export the connectDB function
module.exports = connectDB;