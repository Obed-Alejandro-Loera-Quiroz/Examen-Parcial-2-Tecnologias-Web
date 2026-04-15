const express = require('express');
const cors = require('cors');
const multer = require('multer');
const db = require('./db');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());
app.use('/uploads', express.static('uploads'));

// Configuración de multer para la carga de imágenes
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/'); // Carpeta donde se guardarán las imágenes
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '-' + file.originalname); // Nombre único para la imagen
  }
});
const upload = multer({ storage: storage });

// 1. GET: Listar todos los productos
app.get('/productos', (req, res) => {
  db.query('SELECT * FROM productos', (err, results) => {
    if (err) return res.status(500).send(err);
    res.json(results);
  });
});

// 2. GET: Detalles de un producto por ID
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

// 3. POST: Guardar mensaje de contacto
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

// 4. POST: Agregar producto
app.post('/productos', (req, res) => {
  const {
    nombre,
    categoria,
    marca,
    precio,
    stock,
    imagen, // Ahora llega como string (URL o nombre de archivo)
    descripcion,
    disponible
  } = req.body;

  // Validaciones básicas
  if (!nombre || !precio) {
    return res.status(400).json({ error: 'Nombre y precio son obligatorios' });
  }

  const query = `
    INSERT INTO productos 
    (nombre, categoria, marca, precio, stock, imagen, descripcion, disponible) 
    VALUES (?, ?, ?, ?, ?, ?, ?, ?)
  `;

  const values = [
    nombre,
    categoria || '',
    marca || '',
    Number(precio),
    Number(stock) || 0,
    imagen || '', 
    descripcion || '',
    disponible ? 1 : 0
  ];

  db.query(query, values, (err, result) => {
    if (err) {
      console.error('Error al insertar producto:', err);
      return res.status(500).json({ error: 'Error al guardar en la base de datos' });
    }

    res.status(201).json({
      mensaje: 'Producto agregado correctamente',
      id: result.insertId
    });
  });
});

// Configuración del servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});