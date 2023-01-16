// const Users = require('../models/users.models');
const UserServices = require( '../services/users.services');

const getAllUsers = async ( req,res ) => {
    try {
        const result = await UserServices.getAll();
        res.json({
            message: "enviando usuarios",
            data: result,
        });
    } catch (error) {
        console.log(error);
        res.status(400).json({
            error: error.message,
            details: error.stack,
        });        
    }
};

const getUserById = async (req, res) => {
    try {
        const { id } = req.params;
        const result = await UserServices.getById(id);     
        res.json({
            message: "enviando usuarios",
            data: result,
        });      
    } catch (error) {
        res.status(400).json({
            error: error.message,
            details: error.stack,                
        });
    }
}

const getUsersCoursesByIdWhitCourses = async (req, res) => { //cambiar por cursos
    try {
        const { id } = req.params;
        const result = await UserServices.getByIdWhitCourses(id);     
        res.json({
            message: "obteniendo cursos usuarios",
            data: result,
        }); 
    } catch (error) {
        res.status(400).json({
            error: error.message,
            details: error.stack,                
        });
    }
}
    

const createUser = async ( req, res ) => {
    try {
        const newUser = req.body;
        const result = await UserServices.create(newUser);
        res.json({
            message: "creando usuarios",
            data: result,
        });  
    } catch (error) {
            res.status(400).json({
            error: error.message,
            details: error.stack,                
        });
    }
}

const updateUser = async ( req, res ) => {
    try {
        const { id } = req.params;
        const field = req.body;
        const result = await UserServices.update(id, field);
        res.json({
            message: "creando usuarios",
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

const addCourseToUser = async(req, res) => {
    try {
        const { id } = req.params;
        const { courseId } = req.body;
        const newCourseUser = { userId: id, courseId }
        const result = await UserServices.addCourseToUser(newCourseUser)
        res.status(201).json({
            message: "adicionando courso a un usuario",
            data: result,
        });
    } catch (error) {
        res.status(400).json({
            error: error.message,
            details: error.stack,                
        });  
        
    }
}


module.exports = {
    getAllUsers, 
    getUserById,
    getUsersCoursesByIdWhitCourses, 
    createUser,
    updateUser,
    addCourseToUser,
}