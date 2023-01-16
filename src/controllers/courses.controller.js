// const Courses = require('../models/courses.models');
const CoursesServices = require('../services/courses.services');

const getAllCourses = async ( req, res ) => {
    try {
        const result = await CoursesServices.getAll();
        res.json({
            message: "obteniendo todos los cursos",
            data: result,
        });
    } catch (error) {
        console.log(error);
        res.status(400).json({
            error: error.message,
            details: error.stack,
        }); 
        
    }
}

const createCourse = async ( req, res ) => {
    try {
        const newCourse = req.body;
        const result = await CoursesServices.create(newCourse);
        res.json({
            message: "creando un  nuevo curso",
            data: result,
        });
    } catch (error) {
        res.status(400).json({
            error: error.message,
            details: error.stack,                
        });
        
    }
}

const updateCourse = async ( req, res ) => {
    try {
        const { id } = req.params;
        const field = req.body;
        const result = await CoursesServices.update(id, field);
        res.json({
            message: "actualizando descripcion de un curso",
            data: result,
        });
    } catch (error) {
        console.log(error);
        res.status(400).json({
            error: error.message,
            details: error.stack,                
        });
        
    }
}

const getAllCoursesWhitCategoriesAndWhitVideos = async (req, res) => {
    try {
        const { id } = req.params;
        const result = await CoursesServices.getAllCWhitCWhitV(id);
        res.json({
            message: "obteniendo cursos con categoiras y videos",
            data: result,
        });
    } catch (error) {
        console.log(error);
        res.status(400).json({
            error: error.message,
            details: error.stack,
        });       
    }
}

module.exports = {
    getAllCourses,
    createCourse,
    updateCourse,
    getAllCoursesWhitCategoriesAndWhitVideos,
}