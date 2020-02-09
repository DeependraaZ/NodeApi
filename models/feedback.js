const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const feedbackSchema = new Schema({
    fullname:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    message:{
        type: String,
        required: true
    }
});

const feedback = mongoose.model('feedback', feedbackSchema);
module.exports = feedback;