const mongoose = require("mongoose")

const Schema = mongoose.Schema

const projectSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    discription: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    }
}, { timestamps: true })


module.exports = mongoose.model("Project", projectSchema)