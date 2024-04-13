import { useState } from "react";
import { StyleSheet, Text, View, FlatList, Button } from "react-native";
import { StatusBar } from "expo-status-bar";

import TodoItem from "./components/TodoItem";
import TodoInput from "./components/TodoInput";

export default function App() {
  // state variables
  const [openModal, setOpenModal] = useState(false);
  const [todos, setTodos] = useState([]);

  // Open the modal to add new todo
  const startAddingTodo = () => {
    setOpenModal(true);
  };

  // Close the modal
  const endAddingTodo = () => {
    setOpenModal(false);
  };

  // handlder add goal button
  const handleSubmit = (todo_input) => {
    setTodos((currentTodos) => [
      ...currentTodos,
      { text: todo_input, id: Math.random().toString() },
    ]);

    endAddingTodo();
  };

  // Delete todo item
  const deleteHandler = (id) => {
    setTodos((currentTodos) => {
      return currentTodos.filter((todo) => todo.id !== id);
    });
  };

  return (
    <>
      <StatusBar style="dark" />
      <View style={styles.appContainer}>
        {/* Todo List title */}
        <View style={styles.todoTitleContainer}>
          <Text style={styles.todoTitle}> Create Toto Lists </Text>
        </View>

        <Button title="Add New Todo" color="green" onPress={startAddingTodo} />

        {/* Form input */}
        <TodoInput
          handleSubmit={handleSubmit}
          visible={openModal}
          onCancel={endAddingTodo}
        />

        {/* List of goals stored in the the variable state called totods */}
        <View style={styles.goalsContainer}>
          <FlatList
            data={todos}
            renderItem={(itemData) => {
              return (
                <TodoItem
                  text={itemData.item.text}
                  id={itemData.item.id}
                  deleteHandler={deleteHandler}
                />
              );
            }}
            keyExtractor={(item, index) => {
              return item.id;
            }}
            alwaysBounceVertical={false}
          />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 30,
    paddingHorizontal: 16,
  },

  todoTitleContainer: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },

  todoTitle: {
    fontSize: 25,
    fontWeight: "bold",
  },

  inputContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottomWidth: 1,
    borderColor: "lightgray",
  },

  textInput: {
    borderWidth: 1,
    borderColor: "green",
    width: "70%",
    marginRight: 8,
    padding: 8,
    borderRadius: 5,
  },

  goalsContainer: {
    flex: 5,
    marginTop: 16,
  },
});
