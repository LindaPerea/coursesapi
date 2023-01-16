const Courses = require('../models/courses.models');
const UserCourses = require('../models/usercourses.models');
const Users = require('../models/users.models');

class UserServices {

    static async getAll() {
        try {
            const result = await Users.findAll();
            return result;
        } catch (error) {
            throw error;            
        }   
    }

    static async getById(id) {
        try {
            const result = await Users.findOne({
                where: { id },
                attributes: { exclude: [ "password", "createdAt", "updatedAt" ]},
            })     
            return result;       
        } catch (error) {
            throw error;            
        }
    }

    static async getByIdWhitCourses(id) { 
        try {
            const result = await Users.findOne( { 
                where: { id },
                attributes: { exclude: ["password", "createdAt", "updatedAt"]},
                include: {
                    model: UserCourses,
                    as: "allcourses",
                    attributes: ["id"],
                    include: {
                        model: Courses,
                        as: "course",
                        attributes: ["title"]
                    }                
                },                
            });
            return result;
        } catch (error) {
            throw error;            
        }
    }

    static async create(user) {
        try {
            const result = await Users.create(user);
            return result;
        } catch (error) {
            throw error;            
        }
    }

    static async update(id, field) {
        try {
            const result = await Users.update(field, { where: { id } });
            return result;
        } catch (error) {
            throw error;            
        }
    }

    static async addCourseToUser(newCourseUser) {
        try {
            const result = await UserCourses.create(newCourseUser);
            return result;
        } catch (error) {
            throw error;
        }
    }

};

module.exports = UserServices;