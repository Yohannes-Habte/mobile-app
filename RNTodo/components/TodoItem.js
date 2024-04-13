import { StyleSheet, Text, View, Pressable } from "react-native";

const TodoItem = (props) => {
  return (
    <View>
      <Pressable
        android_ripple={{ color: "lightgreen" }}
        style={({ pressed }) => pressed && styles.pressedItem}
        onPress={props.deleteHandler.bind(this, props.id)}
      >
        <Text style={styles.todoList}>{props.text}</Text>
      </Pressable>
    </View>
  );
};

export default TodoItem;

const styles = StyleSheet.create({
  todoList: {
    margin: 8,
    borderRadius: 6,
    backgroundColor: "green",
    padding: 8,
    color: "white",
  },
});
