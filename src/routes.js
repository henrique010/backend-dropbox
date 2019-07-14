const express = require('express');
const multer = require('multer');
const multerConfig = require('./config/multer');

const routes = express.Router();

const BoxControllers = require('./controllers/BoxController');
const FileController = require('./controllers/FileController');

routes.post('/boxes', BoxControllers.store);
routes.get('/boxes/:id', BoxControllers.show);
routes.post('/boxes/files/:id', multer(multerConfig).single('file'), FileController.store);

module.exports = routes;