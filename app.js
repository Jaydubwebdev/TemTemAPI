const express = require('express');
const dotenv = require('dotenv');
const logger = require('./middleware/logger');
const colors = require('colors');
const bodyParser = require('body-parser');
const connectDB = require('./config/db');
const errorHandler = require('./middleware/error.js');

// Router Files
const temtems = require('./routes/temtems');

// Load Environment Variables
dotenv.config({ path: './config/config.env' });

// Connect to Database
connectDB();

// Initialize Express Application
const app = express();
app.use(bodyParser.json());

// Dev Logger Middleware
if (process.env.NODE_ENV === 'development'){
    app.use(logger);
};

// Mount Routers
app.use('/api/v1/temtem', temtems);
app.use(errorHandler);

// Open Port
const PORT = process.env.PORT || 5000;
const server = app.listen(
    PORT,
    console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}.`.yellow.bold)
);

// Unhandled Promise Rejections
process.on('unhandledRejection', (err, promise) => {
    console.log(`Error: ${err.message}.`.red.bold);
    server.close(() => {
        process.exit(0);
    });
});