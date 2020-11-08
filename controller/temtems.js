const ErrorResponse = require('../utils/errorResponse');
const error = require('../middleware/error');
const asyncHandler = require('../middleware/async');
const Temtem = require('../models/Temtem');

// Get all Temtem
exports.getTemtems = asyncHandler(async (req, res, next) => {
    const temtems = await Temtem.find()
    res.status(200).json({
        success: true,
        data: temtems
    });
});

// Get Single Temtem
exports.getTemtem = asyncHandler(async (req, res, next) => {
    const temtem = await Temtem.findById(req.params.id);

    if (!Temtem) {
        return next(
            new ErrorResponse(`Temtem not found with id of ${req.params.id}`.red.bold, 400)
        );
    };

    res.status(200).json({
        success: true,
        data: temtem
    });
});

// Create Temtem
exports.addTemtem = asyncHandler(async (req, res, next) => {
    const temtem = await Temtem.create(req.body);
    res.status(201).json({
        success: true,
        data: temtem
    });
});

// Update Temtem
exports.editTemtem = asyncHandler(async (req, res, next) => {
    const temtem = await Temtem.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true,
        useFindAndModify: false
    });

    if (!Temtem) {
        return next(
            new ErrorResponse(`Temtem not found with id of ${req.params.id}`.red.bold, 400)
        );
    };

    res.status(200).json({
        success: true,
        data: temtem
    });
});

// Delete Temtem
exports.deleteTemtem = asyncHandler(async (req, res, next) => {
    const temtem = await Temtem.findByIdAndDelete(req.params.id);

    if (!Temtem) {
        return next(
            new ErrorResponse(`Temtem not found with id of ${req.params.id}`.red.bold, 400)
        );
    };

    res.status(200).json({
        success: true,
        useFindAndModify: false,
        data: temtem
    });
});