const db = require('../utils/database');
const Users = require('../models/users.models');
const Courses = require('../models/courses.models');
const UserCourses = require('../models/usercourses.models');
const Categories = require('../models/categories.models');
const Videos = require('../models/videos.models');

const users = [
    { firstName: "Diego", lastName: "Garay", password: "1234", email: "diego@gmail.com"},
    { firstName: "Paul", lastName: "Paul", password: "1234", email: "paul@gmail.com"},
    { firstName: "Steven", lastName: "steven", password: "1234", email: "steven@gmail.com"},
];

const courses = [
    { title: "Math", description: "algoritmos", instructor: "Diego"},
    { title: "Node", description: "Backend", instructor: "Ian"},
    { title: "JavaScript", description: "Fundamentos", instructor: "Ian"},
];

const usercourses = [
    { userId: 1, courseId: 1  },
    { userId: 1, courseId: 3  },
    { userId: 2, courseId: 2 },
    { userId: 2, courseId: 3 },
    { userId: 3, courseId: 2 },
];

const categories = [
    { name: "ciencias", courseId: 1 },
    { name: "programacion", courseId: 2 },
    { name: "programacion", courseId: 3 },
];

const videos = [
    {title: "Math 1", url: "www.math1.com", courseId: 1},
    {title: "Node Basico", url: "www.nodebasico.com", courseId: 2},
    {title: "JavaScript Intermedio", url: "www.js.com", courseId: 2},
];

db.sync({ force: true })
    .then(() => {
        console.log("plantando");
        users.forEach((user) => Users.create(user));

    setTimeout(() => {
        courses.forEach((course) => Courses.create(course));
    }, 100);

    setTimeout(() => {
        usercourses.forEach((usercourse) => UserCourses.create(usercourse));
    }, 250);

    setTimeout(() => {
        categories.forEach((categorie) => Categories.create(categorie));
    }, 400);

    setTimeout(() => {
        videos.forEach((video) => Videos.create(video));
    }, 550);

    })

    .catch((error) => console.log(error));