const mongoose = require('mongoose')
const uniqueValidator = require('mongoose-unique-validator')
mongoose.set('useFindAndModify', false)
mongoose.set('useUnifiedTopology', true)
const url = process.env.MONGODB_URI

mongoose.connect(url, { useNewUrlParser: true })
  .then(result => {console.log('Yhteys tietokantaan muodostettu')
  })
  .catch((error) => {console.log('Virhe yhdistettäessä tietokantaan: ', error.message)
  })

const personSchema = new mongoose.Schema({
  nimi: { type: String, minlength: 3, required: true, unique: true },
  puh: { type: String, minlength: 8, required:true }
})
personSchema.plugin(uniqueValidator)

personSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString()
    delete returnedObject._id
    delete returnedObject.__v
  }
})

module.exports = mongoose.model('Person', personSchema)
