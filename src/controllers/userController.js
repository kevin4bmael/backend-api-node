import alunosModel from '../models/userModel.js'
import zodErrorFormat from '../helper/zodErrorFormat.js'

export const listAllAlunos = (_req, res) => {
  alunosModel.listAllAlunos((error, result) => {
    if (error)
      res.status(500).json({ message: "Erro no Banco de Dados" })
    if (result) {
      if (result.length) {
        res.json(result)
      } else {
        res.json({ message: "Nenhum usuário cadastrado!" })
      }
    }
  })
}

export const showAluno = (req, res) => {
  const id = req.params.id

  alunosModel.showAluno(id, (error, result) => {
    if (error)
      res.status(500).json({ message: "Erro no Banco de Dados" })
    if (result)
      res.json(result[0])
  })
}

export const createAluno = (req, res) => {


  const alunos = req.body

  const validUser = alunosModel.validateAluno(alunos)

  if (validUser?.error) {
    res.status(400).json({
      message: 'Dados inválidos',
      fields: zodErrorFormat(validUser.error)
    })
    return
  }

  const userValidated = validUser.data

  //TODO validar se o email já existe no banco antes de cadastrar

  alunosModel.createAluno(userValidated, (error, result) => {
    if (error)
      res.status(500).json({ message: "Erro no Banco de Dados" })
    if (result) {
      res.json({
        message: "Usuário Cadastrado!",
        alunos: {
          id: result.insertId,
          ...alunos
        }
      })
    }
  })



}

export const deleteAluno = (req, res) => {

  const { id } = req.body

  alunosModel.deleteAluno(id, (error, result) => {
    if (error)
      res.status(500).json({ message: "Erro no Banco de Dados" })
    if (result) {
      if (result.affectedRows) {
        res.json({ message: "Usuário Deletado com Sucesso!" })
      } else {
        res.status(404).json({ message: `Usuário ${id} não encontrado` })
      }
    }
  })
}
export const deleteIdAluno = (req, res) => {
  const { id, slug } = req.params
  console.log(slug)
  //TODO Verificar se os dados são válidos
  alunosModel.deleteAluno(id, (error, result) => {
    if (error)
      res.status(500).json({ message: "Erro no Banco de Dados" })
    if (result) {
      if (result.affectedRows) {
        res.json({ message: "Usuario Deletado com Sucesso!" })
      } else {
        res.status(404).json({ message: `Usuario ${id} não encontrado` })
      }
    }

  })
}

export const updateAluno = (req, res) => {

  const alunos = req.body
  //TODO Verificar se os dados são válidos

  alunosModel.updateAluno(alunos, (error, result) => {
    if (error)
      res.status(500).json({ message: "Erro no Banco de Dados" })
    if (result) {
      if (result.affectedRows) {
        res.json({ message: "Usuário Atualizado com Sucesso!" })
      } else {
        res.status(404).json({ message: `Usuário ${alunos.id} não encontrado` })
      }
    }
  })
}