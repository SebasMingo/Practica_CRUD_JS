const express = require('express')
const bodyParser = require('body-parser')

//body-parser es un middleware para Express que se usa para analizar (o "parsear") los datos enviados en el cuerpo de las solicitudes HTTP, facilitando su acceso desde req.body.

//Cuando un cliente envía datos a través de un formulario o en formato JSON (por ejemplo, en una solicitud POST o PUT), esos datos llegan en bruto, como un flujo de texto. body-parser convierte estos datos en un objeto JavaScript que puedes usar fácilmente.

//¿Cómo funciona?
//Analiza los datos del cuerpo:

//Convierte los datos de una solicitud en un formato manejable.
//Permite acceder a los datos desde req.body.
//Admite varios formatos:

//SON: Maneja datos en formato JSON (app.use(bodyParser.json())).
//URL-encoded: Maneja datos enviados desde formularios (app.use(bodyParser.urlencoded({ extended: true }))).

//¿Qué es un middleware?
//Un middleware es una función en Express que se ejecuta durante el ciclo de vida de una solicitud HTTP (desde que llega hasta que se envía una respuesta).

//Los middlewares se pueden usar para:

//Modificar o analizar datos de la solicitud (req).
//Agregar lógica adicional, como autenticación o registro de actividad.
//Responder directamente o pasar el control a otro middleware con next().

//Parsear es un término que se refiere a analizar y convertir datos de un formato a otro, normalmente para que sean más fáciles de manejar o interpretar. El término proviene del inglés "to parse" y es muy común en programación.

//¿Qué significa parsear en programación?
//Cuando hablamos de parsear, nos referimos al proceso de:

//Tomar datos en bruto (como texto, JSON, XML, etc.).
//Analizarlos según ciertas reglas (como la gramática de un lenguaje o un formato de datos).
//Convertirlos en una estructura que el programa pueda utilizar (como un objeto, un arreglo, o variables).


//Ejercicio
//Crea un servidor básico con Express.
//Define una lista vacía llamada mensajes.
//Agrega dos rutas:
//Una ruta GET en /mensajes que devuelva la lista de mensajes.
//Una ruta POST en /mensajes que permita agregar un mensaje. El mensaje debe enviarse en el cuerpo de la solicitud como un objeto JSON con la clave texto.