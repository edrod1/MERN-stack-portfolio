// import modules
const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const cors = require('cors');
const bodyParser = require("body-parser");
require('dotenv').config();


// app
const app = express();

//setting view engine to ejs
app.set("view engine", "ejs");

// db
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => console.log("DB CONNECTED"))
    .catch((err) => console.log("DB CONNECTION ERROR", err));


const Grid = require("./models/Grids");


// middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors({ origin: true, credentials: true }));

// routes
const testRoutes = require("./routes/test");
app.get("/", (req, res) => { console.log("/projects") })
app.get("/projects", ((req, res) => {
    res.render("cards", { newCardGrids: girds });
}));

const grid1 = new Grid({
    title: "SideNote",
    discription: "A good discription (keeperAPP) would go here for this awsome app I made.",
    image: "A cool screen shot of my project wil go here URL"
});

const grid2 = new Grid({
    title: "Secrets",
    discription: "Great discription would go here for this secret app I made.",
    image: "A nice screen shot of my project wil go here URL"
});

const grid3 = new Grid({
    title: "todolist",
    discription: "A over the top discription would go here for this awsome app I made.",
    image: "An amazing screen shot of my project wil go here URL"
});

const defaultGrids = [grid1, grid2, grid3];
// port
const port = process.env.PORT || 8080;

// listener
const server = app.listen(port, () =>
    console.log(`Server is running on port ${port}`)
);