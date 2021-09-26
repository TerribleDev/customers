var express = require('express');
var router = express.Router();
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
}
  return accum
}, { slim: {}, full: {} })

router.get('/', function(req, res, next) {
  return res.send(Object.values(slim))
});
router.get('/:id', function(req, res, next) {
  if(!req?.params?.id) {
    return res.sendStatus(400)
  }
  const record = full[req.params.id];
  if(record) {
    return res.send(record)
  }
  return res.sendStatus(404)
});

module.exports = router;
