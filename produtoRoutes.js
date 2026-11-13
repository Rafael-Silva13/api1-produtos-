const express = require('express');
const router = express.Router();
const produtoController = require('../controllers/produtoController');

// Rota POST
// /produtos/novo
router.post('/novo', produtoController.criarProduto);


module.exports = router;