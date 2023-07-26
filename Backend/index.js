const express = require("express");
const app = express();
const PORT = process.env.PORT | 5000;
// const PORT = 'https://student-result-api.onrender.com/';
// const PORT = 14232;
var cors = require('cors');

require("dotenv").config();
const dbConfig = require("./config/db");
app.use(express.json());
app.use(cors());

const employeeRoute = require("./routes/employeeRoute");
const studentRoute = require("./routes/studentRoute");
const resultsRoute = require("./routes/resultsRoute");


app.use("/api/employee/", employeeRoute);
app.use("/api/student/", studentRoute);
app.use("/api/results/", resultsRoute);


app.listen(PORT, ()=>{console.log(`Server running on PORT ${PORT}`)});