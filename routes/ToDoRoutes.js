const {Router} = require("express")
const {getToDo,saveToDo,updateToDo,deleteToDo}= require('../Controllers/TodoController')

const routes = Router()

routes.get('/', getToDo)
routes.post('/save', saveToDo)
routes.put('/update', updateToDo)
routes.delete('/delete', deleteToDo)

module.exports = routes;