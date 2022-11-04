const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    month: {
        type: String,
        required: true
    },
    day: {
        type: Number,
        required: true
    },
    hour: {
        type: Number,
        required: true
    }
})

const User = mongoose.model('User', UserSchema)

module.exports = User