const mongoose = require("mongoose")

const gridsSchema = new mongoose.Schema({
    title: String,
    discription: String,
    image: String
})


module.exports = mongoose.model("Grid", gridsSchema)