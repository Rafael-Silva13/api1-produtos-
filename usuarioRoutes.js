const express = require('express');
const router = express.Router();
const usuarioController = require('../controllers/usuarioController');

// Rota POST
// /usuarios/novo
router.post('/novo', usuarioController.criarUsuario);


module.exports = router;