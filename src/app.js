const express = require('express');
const db = require('./utils/database');
const initModels = require('./models/init.models');
const usersRoutes = require('./routes/users.routes' );
const coursesRoutes = require('./routes/courses.routes');
const videoRoutes = require('./routes/videos.routes');
const categoriesRoutes = require('./routes/categories.routes');
// const cors = require('cors');

const app = express();

app.use(express.json());
// app.use(cors());

const PORT = 8000;

db.authenticate() //devuelve una promesa
    .then(() => console.log("autenticacion exitosa"))
    .catch((error) => console.log(error));

initModels();

db.sync({ force: false })
    .then(() => console.log("sincronizado correctamente la base de datos"))
    .catch((error) => console.log(error));

app.get('/', (req, res) => {
    res.status(200).json({ message: 'bienvenido a nuestor servidor '});
});

app.use('/courses/v1', usersRoutes, coursesRoutes, videoRoutes, categoriesRoutes );

app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});