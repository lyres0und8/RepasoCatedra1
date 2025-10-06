const { Router } = require('express')

const router = Router()

// Controllers
const { getUsers /*, getUserById*/, createUser, updateUser, deleteUser } = require('../controllers/user.controller')

// Routes
router.get('/', getUsers)
//router.get('/:id', getUserById)
router.post('/', createUser)
router.put('/:id', updateUser)
router.delete('/:id', deleteUser)

module.exports = router