const { Router } = require('express');

const { getAllCourses, createCourse, updateCourse, getAllCoursesWhitCategoriesAndWhitVideos } = require('../controllers/courses.controller');

const router = Router();

router.get('/courses', getAllCourses);

router.post('/course', createCourse);

router.put('/course/:id', updateCourse);

// router.get('/course/:id/categoriesandvideos', getAllCoursesWhitCategoriesAndWhitVideos);

module.exports = router