const express = require('express')
const router = express.Router();
const {
    addTask,
    getTasks,
    getTaskById,
    changeStatus,
    deleteTask
    
} = require('./task')


router.post("/createTask", addTask);
router.get("/getTasks", getTasks)
router.get("/getTaskById/:id", getTaskById)
router.put("/majTache/:id", changeStatus)
router.delete("/deleteTask/:id", deleteTask)


module.exports = router;