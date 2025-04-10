const express = require('express');
const router = express.Router();

// Lista de productos de ejemplo
const productos = [
  { id: 1, nombre: 'Laptop', precio: 1200, stock: 10 },
  { id: 2, nombre: 'Smartphone', precio: 800, stock: 15 },
  { id: 3, nombre: 'Tablet', precio: 500, stock: 8 }
];

// GET - Obtener todos los productos
router.get('/', (req, res) => {
  res.json(productos);
});

// GET - Obtener un producto por ID
router.get('/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const producto = productos.find(p => p.id === id);
  
  if (!producto) {
    return res.status(404).json({ mensaje: 'Producto no encontrado' });
  }
  
  res.json(producto);
});

// POST - Crear un nuevo producto (simulado)
router.post('/', (req, res) => {
  const { nombre, precio, stock } = req.body;
  
  if (!nombre || !precio) {
    return res.status(400).json({ mensaje: 'Nombre y precio son obligatorios' });
  }
  
  const nuevoProducto = {
    id: productos.length + 1,
    nombre,
    precio,
    stock: stock || 0
  };
  
  productos.push(nuevoProducto);
  res.status(201).json(nuevoProducto);
});

module.exports = router;
