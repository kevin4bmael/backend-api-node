import alunosModel from '../models/userModel.js'

export const listAllAlunos = (_req, res) => {
  alunosModel.listAllAlunos((error, result) => {
    if (error)
      res.status(500).json({ message: "Erro no Banco de Dados" })
    if (result)
      res.json(result)
  })
}

export const showAluno = (req, res) => {
  const id = req.params.id

  alunosModel.showAluno(id, (error, result) => {
    if (error)
      res.status(500).json({ message: "Erro no Banco de Dados" })
    if (result)
      res.json(result)
  })
}

export const createAluno = (req, res) => {

  const alunos = req.body
  //TODO Verificar se os dados são válidos

  alunosModel.createAluno(alunos, (error, result) => {
    if (error)
      res.status(500).json({ message: "Erro no Banco de Dados" })
    if (result)
      res.json({ message: "Usuario Cadastrado!" })
  })
}

export const deleteAluno = (req, res) => {

  const { id } = req.body

  alunosModel.deleteAluno(id, (error, result) => {
    if (error)
      res.status(500).json({ message: "Erro no Banco de Dados" })
    if (result)
      res.json({ message: "Usuario Deletado!" })
  })
}

export const deleteIdAluno = (req, res) => {
  const { id, slug } = req.params
  console.log(slug)
  //TODO Verificar se os dados são válidos
  alunosModel.deleteAluno(id, (error, result) => {
    if (error)
      res.status(500).json({ message: "Erro no Banco de Dados" })
    if (result)
      //TODO Verificar se ao menos uma linha foi removida!
      res.json({ message: "Usuario Deletado com Sucesso!" })
  })
}

export const updateAluno = (req, res) => {

  const course = req.body
  //TODO Verificar se os dados são válidos

  alunosModel.updateAluno(course, (error, result) => {
    if (error)
      res.status(500).json({ message: "Erro no Banco de Dados" })
    if (result)
      res.json({ message: "Usuario Atualizado!" })
  })
}