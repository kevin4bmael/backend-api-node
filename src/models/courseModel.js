import con from '../db/dbConnection.js'

export const listAllCourses = (callback) => {
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

export const showCourse = (callback) => {
  const sql = "SELECT * FROM curso WHERE id = ?;"
  const value = [id]

  con.query(sql, value, (err, result) => {
    if (err) {
      callback(err, null)
      console.log("DB Error:" + err.sqlMessage)
    } else {
      callback(null, re sult)
    }
  })
}


export const createCourse = (course, callback) => {
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

export const deleteCourse = (id, callback) => {
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

export const updateCourse = (course, callback) => {
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

const courseModel = { listAllCourses, showCourse, createCourse, deleteCourse, updateCourse }

export default courseModel