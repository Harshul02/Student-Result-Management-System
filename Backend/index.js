const express = require("express");
const app = express();
const PORT = 5000 | process.env.PORT;

require("dotenv").config();
const dbConfig = require("./config/db");
app.use(express.json());

const employeeRoute = require("./routes/employeeRoute");


app.use("/api/employee/", employeeRoute);


app.listen(PORT, ()=>{console.log(`Server running on PORT ${PORT}`)});