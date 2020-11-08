const ErrorResponse = require('../utils/errorResponse');

const errorHandler = (err, req, res, next) => {
    let error = { ...err };

    error.message = err.message;

    // Mongoose Error for Bad ObjectID
    if (err.name === 'CastError') {
        const message = `Temtem not found with id of ${err.value}`;
        error = new ErrorResponse(message, 404);
        console.log(message.red);
    };

    // Mongoose Error for Duplicate Key
    if (err.code === 11000) {
        const message = 'Duplicate Field Value Entered.';
        error = new ErrorResponse(message, 400);
        console.log(message.red);
    };

    // Mongoose Validation Error
    if (err.name === 'ValidationError') {
        const message = Object.values(err.errors).map(val => val.message);
        error = new errorResponse(message, 400);
        console.log(message.red);
    };

    res.status(error.statusCode || 500).json({
        success: false,
        error: error.message || 'Server Error'
    });
};

module.exports = errorHandler;