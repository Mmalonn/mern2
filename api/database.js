const mongoose = require ("mongoose");
const db=mongoose.connection;
require("dotenv").config

function connectDB(){
  mongoose.connect(process.env.URI, {
    useNewUrlParser:true,
    useUnifiedTopology:true
  })
  db.on("open", _=>{
    console.log("conectado");
  })
  db.on("error", err=>{
    console.log(err)
  })
}

a