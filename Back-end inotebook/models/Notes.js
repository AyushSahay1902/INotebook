const mongoose = require('mongoose');

const NoteSchema = new Schema({
    title:{
        type: String,
        required: true,
        unique: true 
    },
    description:{
        type: String,
        required: true
    },
    tag:{
        type: String,
        default: "Genral"
    },
    date:{
        type: Date,
        default: Date.now 
    }
});

modul.exports = mongoose.model('notes', NoteSchema);