const express = require("express");
const router = express.Router();
const Employee = require("../models/employeeModel");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

router.post("/login", async (req,res) => {
    try{
        const employee = await Employee.findOne({
            employeeId:req.body.employeeId,
        });
        if(!employee){
            return res.status(200).send({
                message: "Employee Not Found",
                success: false
            });
        }

        const isMatch = await bcrypt.compare(req.body.password, employee.password);
        if(!isMatch)
        {
            return res.status(200).send({
                message: "Invalid Password",
                success: false,
            });
        }

        if(employee.isApproved == false){
            return res.status(200).send({
                message : "You are not Admin",
                success:false,
            });
        }

        const token = jwt.sign(
            { employeeId: employee._id },
            process.env.jwt_secret,
            { expiresIn: "24h" }
          );

          res.status(200).send({
            message: "Login successful",
            success: true,
            data: token,
          });
    }catch(error){
        res.status(500).send({
            message: error.message,
            success: false,
          });
    }
})


  module.exports = router;