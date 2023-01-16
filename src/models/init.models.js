const Users = require('./users.models');
const Courses = require('./courses.models');
const Categories = require('./categories.models');
const Videos = require('./videos.models');
const UserCourses = require('./usercourses.models');

const initModels = () => {
    
   
    UserCourses.belongsTo(Users, { as: 'users', foreignKey: 'user_id'});
    Users.hasMany(UserCourses, {as: 'allcourses', foreignKey: 'user_id'});

    UserCourses.belongsTo(Courses, { as: "course", foreignKey: 'course_id'});
    Courses.hasMany(UserCourses, { as: "usercourses", foreignKey: 'course_id'});
    

    Categories.belongsTo(Courses, { as: "courses", foreignKey: "course_id"});
    Courses.hasMany(Categories, { as: "categories", foreignKey: "course_id"});

    Videos.belongsTo(Courses, { as: "courses", foreignKey: "course_id"});
    Courses.hasMany(Videos, { as: "videos", foreignKey: "course_id"});
};

module.exports = initModels;