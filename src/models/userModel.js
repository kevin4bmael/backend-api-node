import con from '../db/dbConnection.js'

import { z } from 'zod'

const userSchema = z.object({
  id:
    z.number({ message: "ID deve ser um valor numérico." })
      .optional(),
  usuario:
    z.string({
      required_error: "Nome é obrigatória.",
      invalid_type_error: "Nome deve ser uma string.",
    })
      .min(3, { message: "Nome deve ter no mínimo 3 caracteres." })
      .max(100, { message: "Nome deve ter no máximo 100 caracteres." }),
  senha:
    z.string({
      required_error: "Senha é obrigatória.",
      invalid_type_error: "Senha deve ser uma string.",
    })
      .min(6, { message: "Senha deve ter no mínimo 6 caracteres." })
      .max(256, { message: "Senha deve ter no máximo 256 caracteres." }),
})

export const validateAluno = (user) => {
  return userSchema.safeParse(user)
}

export const listAllAlunos = (callback) => {
  const sql = "SELECT * FROM alunos;"
  con.query(sql, (err, result) => {
    if (err) {
      callback(err, null)
      console.log("DB Error:" + err.sqlMessage)
    } else {
      callback(null, result)
    }
  })
}

export const showAluno = (id, callback) => {
  const sql = "SELECT * FROM alunos WHERE id = ?;"
  const value = [id]

  con.query(sql, value, (err, result) => {
    if (err) {
      callback(err, null)
      console.log("DB Error:" + err.sqlMessage)
    } else {
      callback(null, result)
    }
  })
}


export const createAluno = (alunos, callback) => {
  const { usuario, senha } = alunos
  const sql = 'INSERT INTO alunos (usuario, senha) VALUES (?, ?);'
  const values = [usuario, senha]

  con.query(sql, values, (err, result) => {
    if (err) {
      callback(err, null)
      console.log("DB Error:" + err.sqlMessage)
    } else {
      callback(null, result)
    }
  })
}

export const deleteAluno = (id, callback) => {
  const sql = 'DELETE FROM alunos WHERE id = ?;'
  const values = [id]

  con.query(sql, values, (err, result) => {
    if (err) {
      callback(err, null)
      console.log("DB Error:" + err.sqlMessage)
    } else {
      callback(null, result)
    }
  })
}

export const updateAluno = (alunos, callback) => {
  const { id, usuario, senha } = alunos
  const sql = 'UPDATE alunos SET usuario = ?, senha = ? WHERE id = ?;'
  const values = [usuario, senha, id]

  con.query(sql, values, (err, result) => {
    if (err) {
      callback(err, null)
      console.log("DB Error:" + err.sqlMessage)
    } else {
      callback(null, result)
    }
  })
}

const alunosModel = { listAllAlunos, showAluno, createAluno, deleteAluno, updateAluno, validateAluno }

export default alunosModel