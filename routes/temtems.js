const express = require('express');
const {
    getTemtems,
    getTemtem,
    addTemtem,
    editTemtem,
    deleteTemtem
} = require('../controller/temtems');
const router = express.Router();

router.route('/')
    .get(getTemtems)
    .post(addTemtem);

router.route('/:id')
    .get(getTemtem)
    .put(editTemtem)
    .delete(deleteTemtem);

module.exports = router;