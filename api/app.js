const express = require ("express");
const app = express();
const morgan = require("morgan");
const helmet = require("helmet");
const cors = require ("cors");
const bodyParser = require ("body-parser");

//bodyparser 
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json())

//other config
app.use(cors());
app.use(helmet());
app.use(morgan());

//routes





module.exports = app;