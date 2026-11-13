const express = require('express');
const router = express.Router();

const produtoRoutes = require('./produtoRoutes');
const usuarioRoutes = require('./usuarioRoutes');

// Associa o prefixo /produtos ao arquivo produtoRoutes
router.use('/produtos', produtoRoutes);
router.use('/usuarios', usuarioRoutes);
// Associação com a rota /usuarios

module.exports = router;