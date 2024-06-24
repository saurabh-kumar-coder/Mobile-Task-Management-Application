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
import UpdateTaskData from "./UpdateTaskData";
import DeleteTask from "./DeleteTask";
import { Card } from "@rneui/themed";
import React, { useEffect, useState } from "react";
import axios from "axios";

const GetAllTasks = () => {
	const [tasks, setTasks] = useState([]);
	const [loading, setLoading] = useState(false);
	const [selectedItem, setSelectedItem] = useState(null);
	const [modalVisible, setModalVisible] = useState(false);
	const [completedCheckBox, setCompletedCheckBox] = useState(false);
	useEffect(() => {}, [completedCheckBox]);
	useEffect(() => {
		const getTasks = async () => {
			setLoading(true);
			try {
				const taskList = await axios.get("http://localhost:8085/");
				setTasks(taskList.data.tasks);
				console.log("tasklist : ", taskList);
			} catch (error) {
				console.error("error : ", error);
			} finally {
				setLoading(false);
			}
		};
		getTasks();
	}, [setSelectedItem]);

	if (loading) {
		return <p>Loading...</p>;
	}

	const changeComplete = async (id, completed) => {
		debugger;
		try {
			const task = await axios.patch(
				`http://localhost:8085/${id}`,
				{
					completed: !completed,
				},
				{ new: true }
			);
			console.log(task);
			setCompletedCheckBox(completed);
			getTasks();
		} catch (error) {
			console.log(error);
		}
	};

	const handleCardPress = (item) => {
		setSelectedItem(item);
		setModalVisible(true);
	};

	const handleModalClose = () => {
		setModalVisible(false);
	};

	return (
		<View>
			<ScrollView>
				<View>
					{tasks.map((task) => (
						<Card>
							<View
								style={{
									flexDirection: "row",
									alignItems: "center",
									justifyContent: "space-between",
								}}
							>
								<CheckBox
									value={task.completed ? true : false}
									onValueChange={() => {
										changeComplete(task._id, task.completed);
									}}
								/>
								<span style={{ paddingLeft: 10 }}></span>
								<UpdateTaskData taskId={task._id} />
								<DeleteTask taskId={task._id} />
							</View>
							<TouchableOpacity
								key={task._id}
								onPress={() => handleCardPress(task)}
							>
								<Text>
									id : <b>{task._id}</b>
									<span> </span>
									title : <b>{task.title}</b>
									{/* created At : <b>{task.createdAt}</b> */}
								</Text>
								<Text>
									updated at : <b>{task.updatedAt}</b>
								</Text>
								task description :{" "}
								{task.description.length > 50
									? task.description.substring(0, 50) + "..."
									: task.description}
							</TouchableOpacity>
						</Card>
					))}
					<View>
						<Modal
							transparent={true}
							visible={modalVisible}
							animationType="slide"
						>
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
									<Text>
										<b>{selectedItem && selectedItem.title}</b>
									</Text>
									<Text>{selectedItem && selectedItem.description}</Text>
									<Card.Divider style={styles.cardDivider} />
									<TouchableOpacity onPress={handleModalClose}>
										<View style={styles.closeButtonContainer}>
											<Text style={styles.closeButton}>Close</Text>
										</View>
									</TouchableOpacity>
								</Card>
							</View>
						</Modal>
					</View>
				</View>
			</ScrollView>
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

export default GetAllTasks;
