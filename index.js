require('dotenv').config()
const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const morgan = require('morgan')
const Person = require('./models/person')

const cors = require('cors')
app.use(cors())

app.use(bodyParser.json())
app.use(morgan('tiny'))
app.use(express.static('build'))

app.get('/info', (req, res) => {
  const koska = Date(Date.now())
  Person.countDocuments({}, function(err, osumia){
    const info = '<div><div>Puhelinmuistiossa on '+osumia+' henkilön yhteystiedot</div>'
        +'<div>Pyyntö esitetty '+koska+'</div></div>'
    res.send(info)
  })
})

app.get('/api/henkilot', (req, res, next) => {
  Person.find({})
    .then(persons => {
      res.json(persons)
    })
    .catch(error => next(error))
})

app.get('/api/henkilot/:id', (req, res, next) => {
  Person.findById(req.params.id)
    .then(person => {
      if(person) {res.json(person.toJSON())}
      else {Response.status(404).end()}
    })
    .catch(error => next(error))
})

app.delete('/api/henkilot/:id', (req, res, next) => {
  Person.findByIdAndRemove(req.params.id)
    .then(result => {
      res.status(204).end()
    })
    .catch(error => next(error))
})

app.put('/api/henkilot/:id', (req, res, next) => {
  const body = req.body
  console.log(body)
  const person = {
    nimi: body.nimi,
    puh: body.numero
  }
  Person.findByIdAndUpdate(req.params.id, person, { new: true })
    .then(updatedPerson => {res.json(updatedPerson.toJSON)
    })
    .catch(error => next(error))
})

app.post('/api/henkilot/', (req, res, next) => {
  const body = req.body
  console.log(body.nimi)

  const person = new Person({
    nimi: body.nimi,
    puh: body.puh
  })
  person.save()
    .then(savedPerson => {
      res.json(savedPerson.toJSON)
    })
    .catch(error => next(error))
  console.log(person)
})

const errorHandler = (error, req, res, next) => {
  console.error(error.message)

  if (error.name === 'CastError' && error.kind == 'ObjectId') {
    return res.status(400).send({ error: 'virheellinen ID' })
  } else if (error.name === 'ValidationError') {
    return res.status(400).send({ error: 'Puutteeliset tiedot nimi/puh' })
  }
  next(error)
}
app.use(errorHandler)

const PORT = process.env.PORT
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})