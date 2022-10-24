import { Router, Request, Response } from "express"
import * as homeController from '../controllers/homeController'
import * as userController from '../controllers/userController'

const router = Router()

router.get('/',homeController.home)
router.get('/login',userController.login)
router.post('/login-usuario',userController.loginUsuario)
router.get('/idade',userController.idade)
router.post('/idade-resultado',userController.idadeResultado)
router.get('/contato',userController.contato)
router.get('/noticia/:noticia',userController.noticia)
router.get('/nome',userController.nome)
router.get('/form',userController.form)

export default router