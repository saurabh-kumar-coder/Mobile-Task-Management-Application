import { View, Text, Modal, TextInput } from "react-native";
import React, { useState } from "react";
import { Button, Card } from "@rneui/themed";
import axios from "axios";
import AsyncStorage from "@react-native-community/async-storage";
const CreateNewTasks = () => {
	const [tasks, setTasks] = useState([]);
	const [loading, setLoading] = useState(false);
	const [selectedItem, setSelectedItem] = useState(null);
	// const [modalVisible, setModalVisible] = useState(false);
	const [completedCheckBox, setCompletedCheckBox] = useState(false);
	const [createCardModel, setCreateCardModel] = useState(false);
	const [title, setTitle] = useState("");
	const [description, setDescription] = useState("");

	const openCard = () => {
		setCreateCardModel(true);
	};

	const handleAddTaskSubmit = async () => {
		try {
			setLoading("true");
			if (!title && !description) {
				console.log("cancel Card");
				cancelCard();
			}
			console.log("title : ", title, " description : ", description);
			const response = await axios.post("http://localhost:8085/", {
				title,
				description,
			});
			const taskData = response.data;
			// AsyncStorage
			await AsyncStorage.setItem("@auth", JSON.stringify(taskData));
			setTitle("");
			setDescription("");
			setTasks([...tasks, response.data]);
			console.log(response.data);
			getLocalStorageData();
			// setModalVisible(false);
		} catch (error) {
			console.log(error);
		}
		setCreateCardModel(false);
	};

	const cancelCard = () => {
		// modalVisible == false ? true : true;
		// setModalVisible(false);
		setCreateCardModel(false);
		setTitle("");
		setDescription("");
	};

	const getLocalStorageData = async () => {
		try {
			const dataString = await AsyncStorage.getItem("@auth");
			if (dataString) {
				const taskData = JSON.parse(dataString);
				setTasks(taskData);
			}
			console.log("dataString : ", dataString);
		} catch (error) {
			console.error("Error retrieving data from AsyncStorage:", error);
		}
	};

	return (
		<View>
			<Button title="Create New Task" onPress={openCard} />
			<Modal visible={createCardModel} animationType="slide">
				<Card
					containerStyle={{
						width: 300,
						height: 200,
						backgroundColor: "white",
					}}
				>
					<TextInput
						placeholder="Title"
						value={title}
						onChangeText={(text) => setTitle(text)}
					/>
					<TextInput
						multiline
						placeholder="Description"
						value={description}
						style={{
							width: 300,
							height: 100,
						}}
						onChangeText={(text) => setDescription(text)}
					/>
					<Button title="Create Task" onPress={handleAddTaskSubmit} />
					<Button title="Cancel" onPress={cancelCard} />
				</Card>
			</Modal>
		</View>
	);
};

export default CreateNewTasks;
