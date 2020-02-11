const mongoose = require('mongoose');

const roomSchema = new mongoose.Schema({
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
    price: {
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

module.exports = mongoose.model('Room', roomSchema);