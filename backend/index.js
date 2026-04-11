

const express = require('express');
const cors = require('cors');
const db = require('./db');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

//1 GET: listar todos los productos
app.get('/productos', (req,res)=>{
    db.query('SELECT * FROM productos', (err, results)=>{
        if(err) return res.status(500).send(err);
        res.json(results);
    });
});

// 2 Detalles de un producto por id 
app.get('/productos/:id',(req,res)=>{
    const {id} = req.params;
    db.query('SELECT * FROM productos WHERE id = ?',[id], (err, results) =>{
        if(err) return res.status(500).send(err);
        res.json(results[0]);
    });
});

// 3. POST: Guardar mensaje de contacto (con Middleware sencillo)
app.post('/contacto', (req, res) => {
  const { nombre, correo, asunto, mensaje } = req.body;
  
  // Middleware sencillo de validación [cite: 198, 202]
  if (!nombre || !correo || !mensaje) {
    return res.status(400).json({ error: 'Faltan campos obligatorios' });
  }

  const query = 'INSERT INTO mensajes (nombre, correo, asunto, mensaje) VALUES (?, ?, ?, ?)';
  db.query(query, [nombre, correo, asunto, mensaje], (err, result) => {
    if (err) return res.status(500).send(err);
    res.json({ status: 'Mensaje guardado con éxito', id: result.insertId });
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});