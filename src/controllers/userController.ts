import { Request, Response } from "express";

export const login =((req:Request, res:Response)=>{
    res.render('pages/login',{
        name:'weslley',
        lastName:'santos'
    })

})

export const loginUsuario =((req:Request, res:Response)=>{
    let email:string = (req.body.email)
    let senha: string = (req.body.senha)

    res.render('pages/login',{
        email,
        senha
    })
})

export const idade = ((req:Request, res:Response)=>{
    res.render('pages/idade')
})

export const idadeResultado = ((req:Request, res:Response)=>{
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

export const contato = ((req:Request, res:Response)=>{
    res.send("PAGINA DE CONTATO")
})

export const noticia = ((req:Request, res:Response)=>{
    let noticia: string = req.params.noticia
    res.send(`Noticias: ${noticia}`)
})

export const nome = ((req:Request, res:Response)=>{
    let nome:string = req.query.nome as string

    res.render('pages/nome',{
        nome
    })

})

export const form = ((req:Request, res:Response)=>{
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
