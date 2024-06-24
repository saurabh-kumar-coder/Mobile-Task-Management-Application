const taskModel = require("../models/taskSchema");
//add task
const addTaskController = async (req, res) => {
	try {
		const { title, description, completed } = req.body;
		if (!title) {
			return res.status(400).send({
				success: false,
				message: "Title is required",
			});
		}
		if (!description) {
			return res.status(400).send({
				success: false,
				message: "Description is required",
			});
		}
		// save task
		const task = await taskModel({ title, description }).save();
		return res.status(201).send({
			success: true,
			message: "Task created successfully",
			id: task.id,
			updatedAt: task.updatedAt,
			createdAt: task.createdAt,
			description: task.description,
			title: task.title,
			completed: task.completed,
		});
	} catch (error) {
		console.log(error);
		return res.status(400).send({
			success: false,
			message: "Failed to add tasks",
			error: error,
		});
	}
};

//get all tasks
const getTaskController = async (req, res) => {
	try {
		const tasks = await taskModel.find({});
		if (!tasks) {
			return res.status(500).send({
				success: false,
				message: "No tasks found",
			});
		}
		return res.status(200).send({
			success: true,
			message: "task found",
			tasks: tasks,
		});
	} catch (error) {
		console.log(error);
	}
};

//update complete check box
const updateCompleted = async (req, res) => {
	try {
		const id = req.params.id;
		const task = await taskModel.findById(id);
		if (!task) {
			return res.status(404).send({
				success: false,
				message: "Task not found",
			});
		}
		task.completed = !task.completed;
		const updatedTask = await task.save();
		console.log("task : ", updatedTask);
		res.status(200).send({
			success: true,
			message: "task found",
			completed: updatedTask.completed,
			task: updatedTask,
		});
	} catch (error) {
		console.log(error);
	}
};

// get single task
const getParticularTask = async (req, res) => {
	const id = req.params.id;
	try {
		console.log("getParticularTask");
		const task = await taskModel.findById(id);
		if (!task) {
			res.status(400).send({
				success: false,
				message: "task not found",
			});
		}
		res.status(200).send({
			success: true,
			task: task,
		});
	} catch (error) {
		res.send({
			success: false,
			message: "could not connect",
		});
		console.log(error);
	}
};

// update particular task
const updateParticularTask = async (req, res) => {
	const id = req.params.id;
	const title = req.body.title;
	const description = req.body.description;
	try {
		const task = await taskModel.findByIdAndUpdate(
			id,
			{
				title: req.body.title,
				description: req.body.description,
			},
			{ new: true }
		);
		if (!task) {
			res.status(400).send({
				success: false,
				message: "task not found",
			});
		}
		res.send({
			success: true,
			task: task,
		});
	} catch (error) {
		res.send({
			success: false,
			message: "could not connect",
			title: title,
			description: description,
		});
		console.log(error);
	}
};

//delete task
const deleteController = async (req, res) => {
	const id = req.params.id;
	try {
		const task = await taskModel.findById(id);
		if (!task) {
			return res.status(404).send({
				success: false,
				message: "task not found",
			});
		}
		const deletedTask = await taskModel.deleteOne(task);
		return res.status(200).send({
			success: true,
			message: "task deleted",
			task: deletedTask,
		});
	} catch (error) {
		console.log(error);
	}
};

module.exports = {
	addTaskController,
	getTaskController,
	updateCompleted,
	updateParticularTask,
	getParticularTask,
	deleteController,
};
