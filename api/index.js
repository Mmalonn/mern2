const app = require ("./app");
require("dotenv").config
require("./database");

async function init(){  
  await app.listen(process.env.PORT)
  console.log("app running on port ",process.env.PORT)
}
init();