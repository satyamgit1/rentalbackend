require('express-async-errors');
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const connectDB = require('./config/db');
const productRoutes = require('./routes/productRoutes');
const errorHandler = require('./middleware/errorMiddleware');

const app = express();

// Middleware
app.use(helmet());
app.use(cors());
app.use(express.json());

// Database Connection
connectDB();

// Routes
app.use('/api/products', productRoutes);

// Error Handling (Must be last middleware)
app.use(errorHandler);

const PORT = process.env.PORT || 5001;

module.exports = app;

if (process.env.NODE_ENV !== 'production') {
  app.listen(PORT, () => 
    console.log(`Server running on port ${PORT}`));
}