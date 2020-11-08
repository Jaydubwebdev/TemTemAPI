const mongoose = require('mongoose');

const TemtemSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    number: {
        type: Number,
        required: true,
        unique: true
    },
    types: {
        type: [String],
        required: true
    },
    description: {
        type: String
    },
    tv: [
        {
            _id: 0,
            stat: [String],
            value: [Number]
        }
    ],
    gender: [
        {
            _id: 0,
            male: Number,
            female: Number
        }
    ],
    stats: [
        {
            _id: 0,
            health: Number,
            stamina: Number,
            speed: Number,
            attack: Number,
            specialAttack: Number,
            defense: Number,
            specialDefense: Number,
            total: Number
        }
    ],
    techniques: {
        type: [String]
    },
    abilities: {
        type: [String]
    },
    evolutionName: {
        type: String
    },
    evolutionLevel: {
        type: Number
    }
});

module.exports = mongoose.model('Temtem', TemtemSchema);