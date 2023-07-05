const express = require("express");
const authMiddleware = require("../middlewares/authMiddleware");
const router = express.Router();
const Student = require("../models/studentModel");

// add new student
router.post("/add-student", authMiddleware, async (req, res) => {
  try {
    const studentExists = await Student.findOne({
      rollNo: req.body.rollNo,
    });
    if (studentExists) {
      return res.status(200).send({
        message: "Student already exists",
        success: false,
      });
    }
    const newStudent = new Student(req.body);
    await newStudent.save();
    res.status(200).send({
      message: "Student added successfully",
      success: true,
    });
  } catch (error) {
    res.status(500).send({
      message: error.message,
      succes: false,
    });
  }
});


router.post("/get-student/:rollNo", authMiddleware, async (req, res) => {
    try {
      const student = await Student.findOne({
        rollNo: req.params.rollNo,
      });
      if (!student) {
        return res.send({
          message: "Student not found",
          success: false,
        });
      }
      res.status(200).send({
        message: "Student fetched successfully",
        success: true,
        data: student,
      });
    } catch (error) {
      res.status(500).send({
        message: error.message,
        success: false,
      });
    }
  });


  module.exports = router;