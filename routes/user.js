const routes = require('express').Router();
const userArray = require('./array')

routes.get('/user', (req, res) => {
  try {
    const paginatePage = Number(req.query.page);
    const paginateNum = Number(req.query.paginate);
    const data = userArray.slice(paginatePage * paginateNum, paginateNum *( paginatePage + 1))
    res.status(200).send(data)

  } catch (error) {
    console.log(error)
  }
})

routes.get('/users', (req, res) => {
  try {
    res.status(200).send(userArray)

  } catch (error) {
    console.log(error)
  }
})
module.exports = routes;
