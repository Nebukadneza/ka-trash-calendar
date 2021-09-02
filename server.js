const express = require('express')
const cache = require('apicache').middleware
const port = require('./port')
const fetchTrashCalendar = require('./fetch-trash-calendar')

const app = express()

app.get('/:street/:number', cache('1 week'), (req, res) => {
  const street = req.params.street
  const fileName = `Abfallkalender ${street}.ics`
  fetchTrashCalendar(req.params.street, req.params.number)
    .then(t => res.attachment(fileName).send(t))
    .catch(_ => res.status(404).send(`No data found for ${street}`))
})

const server = app.listen(port, () => {
  console.log(`Trash calendar listening on port ${port}`)
})
