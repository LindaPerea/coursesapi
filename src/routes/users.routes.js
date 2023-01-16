const { Router } = require ('express');
const { 
    getAllUsers,
    getUserById, 
    createUser, 
    updateUser,
    getUsersCoursesByIdWhitCourses,
    addCourseToUser,
    } 
    = require('../controllers/users.controller');

const router = Router();

router.get('/users', getAllUsers);

router.get('/users/:id', getUserById);  // obtener un usuario por su id

//obtener un usuario junto a los cursos donde esta suscrito

router.get('/users/:id/courses', getUsersCoursesByIdWhitCourses);

router.post('/users', createUser); 

router.put('/users/:id', updateUser);

router.post('/users/:id/addcourseuser', addCourseToUser);

module.exports = router; 