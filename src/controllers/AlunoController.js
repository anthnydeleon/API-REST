import Aluno from "../models/Aluno";
import Photo from "../models/Photo";

class AlunoController {
  async index(req, res) {
    const alunos = await Aluno.findAll({
      attributes: [
        "id",
        "nome",
        "sobrenome",
        "email",
        "idade",
        "peso",
        "altura",
      ],
      order: [
        ["id", "DESC"],
        [Photo, "id", "DESC"],
      ],
      include: {
        model: Photo,
        attributes: ["url", "filename"],
      },
    });
    res.json(alunos);
  }

  async show(req, res) {
    try {
      const { id } = req.params;

      const aluno = await Aluno.findByPk(id, {
        attributes: [
          "id",
          "nome",
          "sobrenome",
          "email",
          "idade",
          "peso",
          "altura",
        ],
        order: [
          ["id", "DESC"],
          [Photo, "id", "DESC"],
        ],
        include: {
          model: Photo,
          attributes: ["filename", "url"],
        },
      });

      return res.json(aluno);
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }

  async create(req, res) {
    try {
      const aluno = await Aluno.create(req.body);

      return res.json(aluno);
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }

  async update(req, res) {
    try {
      const { id } = req.params;

      if (!id) {
        return res.status(404).json({
          errors: ["Faltando ID"],
        });
      }

      const aluno = await Aluno.findByPk(id);

      if (!aluno) {
        return res.status(404).json({
          errors: ["Aluno não encontrado"],
        });
      }

      const alunoAtualizado = await aluno.update(req.body);

      return res.json(alunoAtualizado);
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }

  async delete(req, res) {
    try {
      const { id } = req.params;

      if (!id) {
        return res.status(400).json({
          errors: ["Faltando ID"],
        });
      }

      const aluno = await Aluno.findByPk(id);

      if (!aluno) {
        return res.status(400).json({
          errors: ["Aluno não encontrado"],
        });
      }

      await aluno.destroy();

      return res.json(`Aluno ID:${id} foi apagado.`);
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }
}

export default new AlunoController();
