const express = require('express')
const router = express.Router();
const {
    addTask,
    getTasks
} = require('./task')


router.post("/createTask", addTask);
router.get("/getTasks", getTasks)


module.exports = router;