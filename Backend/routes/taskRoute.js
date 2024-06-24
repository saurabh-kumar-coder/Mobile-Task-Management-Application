const express = require("express");
const {
	addTaskController,
	getTaskController,
	updateCompleted,
	getParticularTask,
	updateParticularTask,
	deleteController,
} = require("../controllers/taskController");

// router object
const router = express.Router();

// creating route
router.post("/", addTaskController);
router.get("/", getTaskController);
router.get("/:id", getParticularTask);
router.patch("/update/:id", updateParticularTask);
router.patch("/:id", updateCompleted);
router.delete("/:id", deleteController);
//export routes
module.exports = router;
