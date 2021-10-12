const faker = require('faker')
const { slim, full } = Array.from({ length: 20 }).fill(0).reduce((accum, current) => {
  const fakeData = {
    id: faker.datatype.uuid(),
    name: faker.name.findName(),
    email: faker.internet.email(),
    distance: faker.datatype.number(100),
  }
  accum.slim[fakeData.id] = fakeData
  accum.full[fakeData.id] = {
    ...fakeData,     
    buzzWords: Array.from({ length: 100 }).fill(0).map(faker.company.bsBuzz).join(";"),
    catchPhrases: Array.from({ length: 100 }).fill(0).map(faker.company.catchPhrase).join(";"),
    companyName: faker.company.companyName(),
    phone: faker.phone.phoneNumber()
}
  return accum
}, { slim: {}, full: {} })

module.exports = { slim, full}