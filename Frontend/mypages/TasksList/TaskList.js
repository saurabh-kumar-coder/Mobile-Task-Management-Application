import {
	View,
	Text,
	CheckBox,
	TouchableOpacity,
	StyleSheet,
	Modal,
	ScrollView,
	Button,
	TextInput,
} from "react-native";
import CreateNewTasks from "../../mycomponents/CreateNewTasks";
import GetAllTasks from "../../mycomponents/GetAllTasks";
import { Card } from "@rneui/themed";
import React, { useEffect, useState } from "react";

import axios from "axios";

const TaskList = () => {
	// const [tasks, setTasks] = useState([]);
	// const [loading, setLoading] = useState(false);
	// const [selectedItem, setSelectedItem] = useState(null);
	// const [modalVisible, setModalVisible] = useState(false);
	// const [completedCheckBox, setCompletedCheckBox] = useState(false);
	// const [title, setTitle] = useState("");
	// const [description, setDescription] = useState("");
	// const [createCardModel, setCreateCardModel] = useState(false);
	// const [createCardModelVisibility, setCreateCardModelVisibility] =
	// 	useState(false);

	// useEffect(() => {}, [completedCheckBox]);
	// useEffect(() => {
	// 	const getTasks = async () => {
	// 		setLoading(true);
	// 		try {
	// 			const taskList = await axios.get("http://localhost:8085/");
	// 			setTasks(taskList.data.tasks);
	// 			console.log("tasklist : ", taskList);
	// 		} catch (error) {
	// 			console.error("error : ", error);
	// 		} finally {
	// 			setLoading(false);
	// 		}
	// 	};
	// 	getTasks();
	// }, [setSelectedItem]);

	// if (loading) {
	// 	return <p>Loading...</p>;
	// }

	// const changeComplete = async (id, completed) => {
	// 	try {
	// 		await axios.patch(`http://localhost:8085/${id}`, {
	// 			completed,
	// 		});
	// 		setCompletedCheckBox(completed);
	// 		getTasks();
	// 	} catch (error) {
	// 		console.log(error);
	// 	}
	// };

	// const handleCardPress = (item) => {
	// 	setSelectedItem(item);
	// 	setModalVisible(true);
	// };

	// const handleModalClose = () => {
	// 	setModalVisible(false);
	// };

	return (
		<View style={styles.container}>
			<Text style={styles.pageTitle}>Task List</Text>
			<CreateNewTasks />
			<View>
				<GetAllTasks />
			</View>
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

export default TaskList;
