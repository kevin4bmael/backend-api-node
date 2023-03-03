const express = require('express');
const router = express.Router();

const courseController = require('../controllers/courseController')

const { listAllCourses, createCourse, deleteCourse, updateCourse } = courseController

router.get('/', listAllCourses); //SELECT
router.post('/', createCourse); //INSERT
router.delete('/', deleteCourse); //DELETE
router.put('/', updateCourse); //UPDATE


module.exports = router;