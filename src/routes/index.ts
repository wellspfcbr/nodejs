import { Router, Request, Response } from "express"
import { request } from "http"

const router = Router()

router.get('/',(req:Request,res:Response) =>{

   let user:string = 'Viviane'

    res.render('pages/home',{
       user,
       produtos:[
        {titulo:'Livro Crepusculo',preco:39},
        {titulo:'Arroz São João', preco: 15},
        {titulo:'Bombril', preco:5},
        {titulo:'Salgadinho Fofura',preco:3}
       ],frases:[
        'A guerra contra as drogas é inutil pois acaba morrendo os dois lados',
        'A Vingança é plena mata alma e envenena',
        'Prefiro morrer do que perder a vida',
        'A vida passa mais rápido do que uma Ferrari na estrada'
       ]

    })
})

router.get('/login',(req:Request,res:Response)=>{
    res.render('pages/login',)
})

router.post('/login-usuario',(req:Request,res:Response)=>{
    let email:string = (req.body.email)
    let senha: string = (req.body.senha)

    res.render('pages/login',{
        email,
        senha
    })
})

router.get('/idade',(req:Request,res:Response)=>{
    res.render('pages/idade',)
 })
 
 router.post('/idade-resultado',(req:Request,res:Response)=>{
     let mostrarIdade: boolean = false
     let idade: number = 0
 
     if(req.body.anoNascimento){
         let anoNascimento:number = parseInt(req.body.anoNascimento as string)
         let anoAtual: number = new Date().getFullYear()
         idade = anoAtual - anoNascimento
         mostrarIdade = true
     }
 
     res.render('pages/idade',{
         mostrarIdade,
         idade
     })
 })


 
//ROTA ESTÁTICA
router.get('/contato',(req:Request,res:Response) =>{
    res.send("PAGINA DE CONTATO")
})
//ROTA DINÂMICA
router.get('/noticia/:noticia',(req:Request,res:Response) =>{
    let noticia: string = req.params.noticia
    res.send(`Noticias: ${noticia}`)
})

router.get('/viagens/:origem-:destino',(req:Request,res:Response) =>{
    let origem:string = req.params.origem
    let destino:string = req.params.destino

    res.send(`Procurando trajetos de ${origem} até ${destino}`)
})

router.get('/nome',(req:Request, res:Response) =>{                       
    let nome:string = req.query.nome as string

    res.render('pages/nome',{
        nome
    })
  
    
})
router.get('/form',(req:Request, res:Response) =>{
    let nome:string = req.query.nome as string
    let idade:number = parseInt(req.query.idade as string)
    let telefone:number = parseInt (req.query.telefone as string)
    let endereco:string = req.query.endereco as string

    
    res.render('pages/form',{
        nome,
        idade,
        telefone,
        endereco

    })
})

export default router