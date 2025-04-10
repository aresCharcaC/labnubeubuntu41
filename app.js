const express = require('express');
const path = require('path');
const clientesRoutes = require('./routes/clientes');
const productosRoutes = require('./routes/productos');

// Inicializar la aplicación Express
const app = express();
const PORT = process.env.PORT || 9000;

// Middleware para procesar JSON
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Servir archivos estáticos
app.use(express.static(path.join(__dirname, 'public')));

// Rutas
app.use('/clientes', clientesRoutes);
app.use('/productos', productosRoutes);

// Ruta principal
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
