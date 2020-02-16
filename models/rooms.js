const mongoose = require('mongoose');

const roomsSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim:true
    },
    location: {
        type: String,
        required: true,
        trim:true
    },
    phone: {
        type: String,
        required: true,
        trim:true
    },
    prices: {
        type: String,
        required: true,
        trim:true
    },
    details: {
        type: String,
    },
    image: {
        type: String
    }
});

module.exports = mongoose.model('Rooms', roomsSchema);