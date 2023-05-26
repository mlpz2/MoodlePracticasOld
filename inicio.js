// Importar la librería MySQL
const mysql = require('mysql');

// Configuración de la conexión a la base de datos
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'cursos',
});

// Conectar a la base de datos
connection.connect((error) => {
    if (error) {
        console.error('Error al conectarse a la base de datos: ' + error.stack);
        return;
    }
    console.log('Conexión a la base de datos establecida con éxito');
});

// Realizar una consulta a la tabla cursos
const query = 'SELECT * FROM cursos';
connection.query(query, (error, results, fields) => {
    if (error) {
        console.error('Error al realizar la consulta: ' + error.stack);
        return;
    }
    console.log('Resultados de la consulta a la tabla cursos:', results);
});

// Realizar una consulta a la tabla asignaturas
const query2 = 'SELECT * FROM asignaturas';
connection.query(query2, (error, results, fields) => {
    if (error) {
        console.error('Error al realizar la consulta: ' + error.stack);
        return;
    }
    console.log('Resultados de la consulta a la tabla asignaturas:', results);
});

// Realizar una consulta a la tabla notas
const query3 = 'SELECT * FROM notas';
connection.query(query3, (error, results, fields) => {
    if (error) {
        console.error('Error al realizar la consulta: ' + error.stack);
        return;
    }
    console.log('Resultados de la consulta a la tabla notas:', results);
});

// Cerrar la conexión a la base de datos
connection.end((error) => {
    if (error) {
        console.error('Error al cerrar la conexión a la base de datos: ' + error.stack);
        return;
    }
    console.log('Conexión a la base de datos cerrada con éxito');
});