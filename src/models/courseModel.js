const con = require('../db/dbConnection')

const listAllCourses = (callback) => {
  const sql = "SELECT * FROM cursos;"
  con.query(sql, (err, result) => {
    if (err) {
      callback(err, null)
      console.log("DB Error:" + err.sqlMessage)
    } else {
      callback(null, result)
    }
  })
}

const createCourse = (course, callback) => {
  const { curso, cargahoraria } = course
  const sql = 'INSERT INTO cursos (nome, cargahoraria) VALUES (?, ?);'
  const values = [curso, cargahoraria]

  con.query(sql, values, (err, result) => {
    if (err) {
      callback(err, null)
      console.log("DB Error:" + err.sqlMessage)
    } else {
      callback(null, result)
    }
  })
}

const deleteCourse = (id, callback) => {
  const sql = 'DELETE FROM cursos WHERE id = ?;'
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

const updateCourse = (course, callback) => {
  const { id, curso, cargahoraria } = course
  const sql = 'UPDATE cursos SET nome = ?, cargahoraria = ? WHERE id = ?;'
  const values = [curso, cargahoraria, id]

  con.query(sql, values, (err, result) => {
    if (err) {
      callback(err, null)
      console.log("DB Error:" + err.sqlMessage)
    } else {
      callback(null, result)
    }
  })
}


module.exports = { listAllCourses, createCourse, deleteCourse, updateCourse }