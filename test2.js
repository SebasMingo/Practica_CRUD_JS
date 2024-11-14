const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;


// Middleware de body-parser para manejar Json

app.use(bodyParser.json());

//Middleware para manejar datos de formularios

app.use(bodyParser.urlencoded({extended : true}));

// arreglo o array (lista) vacia llamada nombres
let nombres = []

// Ruta GET para obtener todos los nombres
app.get('/nombres', (req, res) => {
    res.json(nombres); // Devuelve la lista de nombres
});

// Ruta POST para agregar un nombre a la lista
app.post('/nombres', (req, res) => {
    const {nombre}= req.body // Extrae el nombre del cuerpo de la solicitud

    if (!nombre) { // Verifica si no envio el nombre
        return res.status(400).json({error: 'El nombre es obligatorio'});
    }

    const nuevoNombre = {nombre}; //crea un objeto con el nombre del usuario
    nombres.push(nuevoNombre); // anade el objeto a la lista

    return res.status(201).json({
        mensaje: 'Nombre agregado', 
        nombres}); //devuelve la lista actualizada 
});


// Inicia el sevidor
app.listen(port, () => {
    console.log(`Servidor escuchando en http://localhost:${port}`);
});
