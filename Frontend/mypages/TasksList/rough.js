import React, { useState } from "react";
import { View, Text, Button, Modal, TextInput, StyleSheet } from "react-native";

const TaskList = () => {
	const [tasks, setTasks] = useState([]);
	const [modalVisible, setModalVisible] = useState(false);
	const [title, setTitle] = useState("");
	const [description, setDescription] = useState("");

	const handleAddTask = () => {
		setModalVisible(true);
	};

	const handleModalClose = () => {
		setModalVisible(false);
	};

	const handleAddTaskSubmit = async () => {
		try {
			const newTask = { title, description };
			// Add the new task to the API or your database
			const response = await axios.post("http://localhost:8085/tasks", newTask);
			setTasks([...tasks, response.data]);
			setModalVisible(false);
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<View style={styles.container}>
			<Button title="ADD TASK" onPress={handleAddTask} />
			<Modal
				visible={modalVisible}
				animationType="slide"
				onRequestClose={handleModalClose}
			>
				<View style={styles.modalContainer}>
					<Text style={styles.modalTitle}>Add Task</Text>
					<TextInput
						style={styles.input}
						placeholder="Title"
						value={title}
						onChangeText={(text) => setTitle(text)}
					/>
					<TextInput
						style={styles.input}
						placeholder="Description"
						value={description}
						onChangeText={(text) => setDescription(text)}
					/>
					<Button title="Add Task" onPress={handleAddTaskSubmit} />
				</View>
			</Modal>
			{/* Render the task list here */}
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
	},
	modalContainer: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
		backgroundColor: "#fff",
		padding: 20,
	},
	modalTitle: {
		fontSize: 24,
		marginBottom: 10,
	},
	input: {
		height: 40,
		borderColor: "#ccc",
		borderWidth: 1,
		paddingHorizontal: 10,
		paddingVertical: 10,
		marginBottom: 10,
	},
});

export default TaskList;
