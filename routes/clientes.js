const express = require('express');
const router = express.Router();

// Lista de clientes de ejemplo
const clientes = [
  { id: 1, nombre: 'Juan Pérez', email: 'juan@ejemplo.com' },
  { id: 2, nombre: 'María López', email: 'maria@ejemplo.com' },
  { id: 3, nombre: 'Carlos Gómez', email: 'carlos@ejemplo.com' }
];

// GET - Obtener todos los clientes
router.get('/', (req, res) => {
  res.json(clientes);
});

// GET - Obtener un cliente por ID
router.get('/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const cliente = clientes.find(c => c.id === id);
  
  if (!cliente) {
    return res.status(404).json({ mensaje: 'Cliente no encontrado' });
  }
  
  res.json(cliente);
});

// POST - Crear un nuevo cliente (simulado)
router.post('/', (req, res) => {
  const { nombre, email } = req.body;
  
  if (!nombre || !email) {
    return res.status(400).json({ mensaje: 'Nombre y email son obligatorios' });
  }
  
  const nuevoCliente = {
    id: clientes.length + 1,
    nombre,
    email
  };
  
  clientes.push(nuevoCliente);
  res.status(201).json(nuevoCliente);
});

module.exports = router;
