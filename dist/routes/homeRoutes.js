"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _express = require('express');
var _HomeController = require('../controllers/HomeController'); var _HomeController2 = _interopRequireDefault(_HomeController);

const router = new (0, _express.Router)();

router.get("/", _HomeController2.default.index);

exports. default = router;

/*
index -> lista todos os usuários -> GET
store/create -> cria um novo usuário -> POST
delete -> deleta um  usuário -> DELETE
show -> mostra um usuário -> GET
update -> atualiza um usuário -> PATCH ou PUT
*/
