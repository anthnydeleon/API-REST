"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _express = require('express');

var _loginRequired = require('../middlewares/loginRequired'); var _loginRequired2 = _interopRequireDefault(_loginRequired);
var _PhotoController = require('../controllers/PhotoController'); var _PhotoController2 = _interopRequireDefault(_PhotoController);

const router = new (0, _express.Router)();

router.post("/", _loginRequired2.default, _PhotoController2.default.create);

exports. default = router;

/*
index -> lista todos os usuários -> GET
store/create -> cria um novo usuário -> POST
delete -> deleta um  usuário -> DELETE
show -> mostra um usuário -> GET
update -> atualiza um usuário -> PATCH ou PUT
*/
