import multer from "multer";
import Photo from "../models/Photo";
import multerConfig from "../config/multerConfig";
import Aluno from "../models/Aluno";

const upload = multer(multerConfig).single("foto");

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
        const alunoPhoto = await Aluno.findByPk(aluno_id);

        if (!alunoPhoto) {
          return res.status(400).json({
            errors: [`Aluno com ID:${aluno_id} inexistente.`],
          });
        }

        const photo = await Photo.create({ originalname, filename, aluno_id });
        return res.json(photo);
      } catch (e) {
        return res.status(400).json({
          errors: ["Erro inesperado"],
        });
      }
    });
  }
}

export default new PhotoController();
