import { Router } from "express";
import alunoController from "../controllers/AlunoController";
import loginRequired from "../middlewares/loginRequired";

const router = new Router();

router.get("/", alunoController.index);
router.post("/", loginRequired, alunoController.create);
router.get("/:id/", alunoController.show);
router.put("/:id/", loginRequired, alunoController.update);
router.delete("/:id/", loginRequired, alunoController.delete);

export default router;

/*
index -> lista todos os usuários -> GET
store/create -> cria um novo usuário -> POST
delete -> deleta um  usuário -> DELETE
show -> mostra um usuário -> GET
update -> atualiza um usuário -> PATCH ou PUT
*/
