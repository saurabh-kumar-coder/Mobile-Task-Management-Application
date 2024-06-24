import { View, Text, Button } from "react-native";
import React from "react";
import axios from "axios";

const DeleteTask = ({ taskId }) => {
	const deleteButton = async () => {
		try {
			const task = await axios.delete(`http://localhost:8085/${taskId}`);
			console.log(task);
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<View>
			<Button title="delete" onPress={deleteButton} />
		</View>
	);
};

export default DeleteTask;
