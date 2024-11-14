const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;


// Middleware de body-parser para manejar JSON

app.use(bodyParser.json());

//Middleware para manejar datos de formulario

app.use(bodyParser.urlencoded({ extended: true}));

// lsita para almacenar las tareas
let tareas = [];

// Ruta GET para obtener todas las tareas
app.get('/tareas', (req, res) => {
    res.json(tareas); // envia todas las tareas como respuestas en formato JSON
});

// Ruta POST para anadir una nueva tarea
app.post('/tareas', (req,res) => {
    const { id, descripcion } = req.body; // Estraer id y descripcion de la solicitud
    if (id || !descripcion) {
        return res.status(400).json({ error: 'El id y la descripcion son requeridos '});
    }
    const nuevaTarea = { id, descripcion};
    tareas.push(nuevaTarea); // Anadir la nueva tarea a la lista
    res.status(201).json(nuevaTarea); // Reponder con la tarea creada
    
});

// Ruta PUT para actualizar una tarea
app.put('/tareas/:id',(req, res) => {
    const {id} = req.params; //Obtener el ID de la tarea de los parametros
    const {descripcion} = req.body; // Obtener la nueva descripcion
    const tarea = tareas.find(t=> t.id === id); // Buscar la tarea por ID

    if (!tarea) {
        return res.status(404).json({error: 'Tarea no encontrada'});
    }
    tarea.descripcion = descripcion; // Actualizar la tarea
    res.json(tarea); // Responder con la tarea actualizada
});

// Ruta DELETE para eliminar una tarea
app.delete('/tareas/:id', (req, res) => {
    const { id} = req.params; // Obtener el ID de la tarea de los parametros
    const index = tareas.findIndex(t =>)
})