const mongoose = require('mongoose')
const salasana = process.argv[2]
const url = `mongodb+srv://JF:${salasana}@cluster0-kltyf.mongodb.net/henkilot?retryWrites=true&w=majority`

const personSchema = new mongoose.Schema({
  nimi: String,
  puh: String,
})

const Person = mongoose.model('Person', personSchema)

if (process.argv.length === 3){
  console.log('Puhelinluettelo:')
  mongoose.connect(url, { useNewUrlParser: true })
  Person.find({}).then(result => {
    result.forEach(person => {
      console.log(person)
    })
    mongoose.connection.close()
  })

}

else if (process.argv.length === 5) {
  const nimi = process.argv[3]
  const puh = process.argv[4]

  mongoose.connect(url, { useNewUrlParser: true })

  const person = new Person({
    nimi: nimi,
    puh: puh
  })

  person.save().then(response => {
    console.log('henkilön tiedot tallennettu')
    mongoose.connection.close()
  })
}

else {
  console.log('Käynnistä ohjelma vaihtoehtoisilla komennoilla:')
  console.log('"node mongo.js <salasana>"')
  console.log('"node mongo.js <salasana> <lisättävä nimi> <lisättävä puhelinnumero>"')
  process.exit(1)
}

