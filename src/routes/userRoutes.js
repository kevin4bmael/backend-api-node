const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
  res.json({ message: "Entrou na rota /user com GET!" })
})

router.post('/', (req, res) => {
  res.json({ message: "Entrou na rota /user com POST!" })
})

router.delete('/', (req, res) => {
  res.json({ message: "Deletado com sucesso!" })
})

router.put('/', (req, res) => {
  res.json({ message: "Deletado com sucesso!" })
})

module.exports = router