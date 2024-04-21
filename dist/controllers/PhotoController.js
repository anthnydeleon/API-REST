"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _multer = require('multer'); var _multer2 = _interopRequireDefault(_multer);
var _Photo = require('../models/Photo'); var _Photo2 = _interopRequireDefault(_Photo);
var _multerConfig = require('../config/multerConfig'); var _multerConfig2 = _interopRequireDefault(_multerConfig);
var _Aluno = require('../models/Aluno'); var _Aluno2 = _interopRequireDefault(_Aluno);

const upload = _multer2.default.call(void 0, _multerConfig2.default).single("foto");

class PhotoController {
  create(req, res) {
    return upload(req, res, async (err) => {
      if (err) {
        return res.status(400).json({
          errors: [err.code],
        });
      }

      try {
        const { originalname, filename } = req.file;
        const { aluno_id } = req.body;
        const alunoPhoto = await _Aluno2.default.findByPk(aluno_id);

        if (!alunoPhoto) {
          return res.status(400).json({
            errors: [`Aluno com ID:${aluno_id} inexistente.`],
          });
        }

        const photo = await _Photo2.default.create({ originalname, filename, aluno_id });
        return res.json(photo);
      } catch (e) {
        return res.status(400).json({
          errors: ["Erro inesperado"],
        });
      }
    });
  }
}

exports. default = new PhotoController();
