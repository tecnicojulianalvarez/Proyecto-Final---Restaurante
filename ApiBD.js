const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');

const app = express();
app.use(cors());

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'restaurante'
});

connection.connect(err => {
  if (err) {
    console.error('Error al conectar a MySQL:', err);
    return;
  }
  console.log('Conectado a MySQL');
});

app.get('/usuarios', (req, res) => {
  connection.query('SELECT * FROM usuarios', (err, results) => {
    if (err) {
      console.error('Error en la consulta:', err);
      res.status(500).send('Error al obtener usuarios');
      return;
    }
    res.json(results);
  });
});

app.listen(3000, () => {
  console.log('Servidor activo en http://localhost:3000');
});
