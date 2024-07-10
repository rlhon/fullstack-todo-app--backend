const {Router}  = require("express")
const { getToDo, saveToDo, updateToDo, deleteToDo, changeDone } = require("../controllers/ToDoController")

const router = Router()

router.get('/', getToDo)
router.post('/save', saveToDo)
router.post('/update', updateToDo)
router.post('/delete', deleteToDo)
router.post('/state', changeDone)


module.exports = router