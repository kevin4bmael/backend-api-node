import express from 'express'

import {

  listAllAlunos,
  showAluno,
  createAluno,
  deleteAluno,
  updateAluno,
  deleteIdAluno
} from '../controllers/userController.js'


const router = express.Router()

router.get('/', listAllAlunos); //SELECT
router.get('/:id', showAluno); //SELECT only one
router.post('/', createAluno); //INSERT
router.delete('/', deleteAluno); //DELETE
router.delete('/:id', deleteIdAluno) // DELETE
router.put('/', updateAluno); //UPDATE

// router.get('/', (req, res) => {
//   res.json({ message: "Entrou na rota /user com GET!" })
// })

// router.post('/', (req, res) => {
//   res.json({ message: "Entrou na rota /user com POST!" })
// })

// router.delete('/', (req, res) => {
//   res.json({ message: "Deletado com sucesso!" })
// })

// router.put('/', (req, res) => {
//   res.json({ message: "Deletado com sucesso!" })
// })

export default router