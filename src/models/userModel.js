import con from '../db/dbConnection.js'

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
  const { id, usuario, senha } = alunos
  const sql = 'INSERT INTO alunos (id, usuario, senha) VALUES (?, ?, ?);'
  const values = [id, usuario, senha]

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

const alunosModel = { listAllAlunos, showAluno, createAluno, deleteAluno, updateAluno }

export default alunosModel