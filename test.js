const express = require('express');
const bodyParser = requiere('body-parser');

const app = express();

// Middleware de body-parser para manejar JSON

app.use(bodyParser.json());

//  Middleware para manejar datos de formularios

app.use(bodyParser.urlencoded({ extended: true}));

app.post('/subimit',(req,res) => {
    console.log(req.body); // Aqui accedes a los datos enviados
    res.send('Datos recibidos');
});

app.listen(3000, () =)


//hacer un servidor con express
const express = require('express');
const app = express();

tareas = []

//una ruta get para obtener todas las tareas 

//una ruta post para anadir una nueva tarea a lista 

//una ruta get para obtener una tarea por id

app.listen(3000, () => {
    console.log('Servidor escuchando en http://localhost:3000')
});
