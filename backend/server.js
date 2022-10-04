// import modules
require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const cors = require('cors');
const bodyParser = require("body-parser");

const projectRoutes = require("./routes/projects");
const adminRoutes = require("./routes/admin");


// express app
const app = express();

//setting view engine to ejs
app.set("view engine", "ejs");



// middleware
app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
});
app.use(express.json());

// app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors({ origin: "http://localhost:3000", credentials: true }));

// routes
app.use("/api/projects", projectRoutes)
app.use("/api/admin", adminRoutes)


// db
mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log("DB CONNECTED"))
    .catch((err) => console.log("DB CONNECTION ERROR", err));



let port = process.env.PORT;
if (port == null || port == "") {
    port = 8080;
}

// listener for request
app.listen(port, () =>
    console.log(`Server is running on port ${port}`)
);