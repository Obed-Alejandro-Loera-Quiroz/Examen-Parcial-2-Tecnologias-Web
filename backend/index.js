

const express = require('express');
const cors = require('cors');
const db = require('./db');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());
app.use('/uploads', express.static('uploads'));

//1 GET: listar todos los productos
app.get('/productos', (req,res)=>{
    db.query('SELECT * FROM productos', (err, results)=>{
        if(err) return res.status(500).send(err);
        res.json(results);
    });
});

// 2 Detalles de un producto por id 
app.get('/productos/:id', (req, res) => {
  const { id } = req.params;

  console.log('ID recibido en backend:', id);

  db.query('SELECT * FROM productos WHERE id = ?', [id], (err, results) => {
    if (err) {
      console.error('Error en GET /productos/:id:', err);
      return res.status(500).json({ error: 'Error del servidor' });
    }

    if (!results || results.length === 0) {
      return res.status(404).json({ error: 'Producto no encontrado' });
    }

    console.log('Producto encontrado:', results[0]);
    res.json(results[0]);
  });
});

// POST: Guardar mensaje de contacto
app.post('/contacto', (req, res) => {
    console.log('--- Nueva petición POST en /contacto ---');
    console.log('Datos recibidos del frontend:', req.body);

    const { nombre, correo, asunto, mensaje } = req.body;

    // Validación de campos obligatorios
    if (!nombre || !correo || !mensaje) {
        console.log('Error: Campos obligatorios incompletos');
        return res.status(400).json({ error: 'Faltan campos obligatorios' });
    }

    const query = 'INSERT INTO mensajes (nombre, correo, asunto, mensaje) VALUES (?, ?, ?, ?)';
    
    db.query(query, [nombre, correo, asunto, mensaje], (err, result) => {
        if (err) {
            console.error('Error al insertar en MySQL:', err);
            return res.status(500).json({ error: 'Error al guardar en la base de datos', detalle: err });
        }
        
        console.log('Mensaje guardado correctamente con ID:', result.insertId);
        res.status(200).json({ 
            status: 'Éxito', 
            mensaje: 'Mensaje guardado con éxito', 
            id: result.insertId 
        });
    });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});