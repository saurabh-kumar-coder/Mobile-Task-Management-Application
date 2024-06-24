import { Image, StyleSheet, Platform, View, Text } from 'react-native';
import TaskList from "../../mypages/TasksList/TaskList"

export default function HomeScreen() {
  return (
    <View>
      <TaskList />
    </View>
  );
}
