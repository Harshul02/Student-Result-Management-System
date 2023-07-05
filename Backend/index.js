const express = require("express");
const app = express();
const PORT = 5000 | process.env.PORT;

require("dotenv").config();
const dbConfig = require("./config/db");
app.use(express.json());

const employeeRoute = require("./routes/employeeRoute");
const studentRoute = require("./routes/studentRoute");
const resultsRoute = require("./routes/resultsRoute");


app.use("/api/employee/", employeeRoute);
app.use("/api/student/", studentRoute);
app.use("/api/results/", resultsRoute);


app.listen(PORT, ()=>{console.log(`Server running on PORT ${PORT}`)});