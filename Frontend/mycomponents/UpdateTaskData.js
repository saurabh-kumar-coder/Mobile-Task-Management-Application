import {
	View,
	Text,
	Modal,
	TouchableOpacity,
	StyleSheet,
	TextInput,
	TextInputBase,
} from "react-native";
import React, { useEffect, useState } from "react";
import { Button, Card } from "@rneui/themed";
import axios from "axios";

const UpdateTaskData = ({ taskId }) => {
	const [task, setTask] = useState([]);
	const [loading, setLoading] = useState(false);
	const [modalVisible, setModalVisible] = useState(false);
	const [completedCheckBox, setCompletedCheckBox] = useState(false);
	const [title, setTitle] = useState("");
	const [description, setDescription] = useState("");

	useEffect(() => {}, [completedCheckBox]);

	if (loading) {
		return <p>Loading...</p>;
	}

	const handleModalClose = () => {
		setModalVisible(false);
	};

	const editButton = async () => {
		setModalVisible(true);
		const getTask = await axios.get(`http://localhost:8085/${taskId}`);
		const task = getTask.data.task;
		setTask(task);
	};
	const updateTask = async () => {
		debugger;
		console.log("title: ", title);
		const task = await axios.patch(
			`http://localhost:8085/update/${taskId}`,
			{
				title: title,
				description: description,
			},
			{ new: true }
		);
		console.log(task);
		setTitle("");
		setDescription("");
		handleModalClose();
	};

	return (
		<View>
			<Button title="edit" onPress={editButton} />
			{/* open current task */}

			<Modal transparent={true} visible={modalVisible} animationType="slide">
				<View
					style={{
						flex: 1,
						justifyContent: "center",
						alignItems: "center",
					}}
				>
					<Card
						containerStyle={{
							width: 300,
							height: 200,
							backgroundColor: "white",
						}}
					>
						<TextInput
							defaultValue={task.title}
							onChangeText={(text) => setTitle(text)}
							placeholder="Enter some text"
						/>
						<TextInput
							multiline
							style={{ height: 100 }}
							defaultValue={task.description}
							onChangeText={(text) => setDescription(text)}
							placeholder="Enter some text"
						/>
						{/* <TextInput
							readOnly={false}
							multiline
							editable
							style={{ height: 100 }}
							value={task?.description || ""}
							onChangeText={(text) => setDescription(text)}
						/> */}

						<Card.Divider style={styles.cardDivider} />
						<TouchableOpacity onPress={handleModalClose}>
							<View style={styles.closeButtonContainer}>
								<Text style={styles.closeButton}>Close</Text>
							</View>
						</TouchableOpacity>
						<TouchableOpacity onPress={updateTask}>
							<View style={styles.closeButtonContainer}>
								<Text style={styles.closeButton}>Update</Text>
							</View>
						</TouchableOpacity>
					</Card>
				</View>
			</Modal>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		height: "100%",
		backgroundColor: "#ffffff",
	},
	pageTitle: {
		color: "red",
		fontSize: 24,
		flex: 1,
		textAlign: "center",
		alignItems: "center",
	},
	cardDivider: {
		height: "80px",
		// bottom: 0,
	},
	closeButtonContainer: {
		backgroundColor: "blue",
		position: "static",
		padding: 5,
		borderRadius: 50,
		shadowColor: "#000",
		shadowOffset: {
			width: 0,
			height: 2,
		},
		shadowOpacity: 0.25,
		shadowRadius: 3.84,
		elevation: 5,
	},
	closeButton: {
		textAlign: "center",
		color: "white",
		fontSize: 16, // Adjust font size as needed
	},
});

export default UpdateTaskData;
