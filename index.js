const express = require("express");
const app = express();
const PORT = 3000 | process.env.PORT;

require("dotenv").config();
const dbConfig = require("./config/db");
app.use(express.json());

app.listen(PORT, ()=>{console.log(`Server running on PORT ${PORT}`)});