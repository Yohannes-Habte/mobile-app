import { useState } from "react";
import {
  StyleSheet,
  View,
  TextInput,
  Button,
  Modal,
  Image,
} from "react-native";

const TodoInput = (props) => {
  // state variables
  const [todo, setTodo] = useState("");

  // Handle Input change
  const handlChange = (enteredText) => {
    setTodo(enteredText);
  };

  // Reset input values
  const reset = () => {
    setTodo("");
  };

  // Add Todo handler
  const addTodoHandler = () => {
    props.handleSubmit(todo);
    reset();
  };

  return (
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.inputContainer}>
        <Image
          style={styles.image}
          source={require("../assets/images/success.png")}
        />
        <TextInput
          style={styles.textInput}
          placeholder="Enter your todo!"
          value={todo}
          onChangeText={handlChange}
        />
        <View style={styles.buttonsContainer}>
          <View style={styles.buttonContainer}>
            <Button
              title="Add Todo"
              onPress={addTodoHandler}
              color={"#228b22"}
            />
          </View>

          <View style={styles.buttonContainer}>
            <Button title="Cancel" onPress={props.onCancel} color="#ee82ee" />
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default TodoInput;

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    borderBottomWidth: 1,
    backgroundColor: "#f0e68c",
  },

  textInput: {
    borderWidth: 1,
    borderColor: "green",
    backgroundColor: "#f8f8ff",
    width: "70%",
    marginRight: 8,
    padding: 10,
    borderRadius: 5,
  },

  buttonsContainer: {
    flexDirection: "row",
    marginTop: 15,
  },

  buttonContainer: {
    marginHorizontal: 5,
  },

  image: {
    width: 200,
    height: 100,
    margin: 20,
    borderRadius: 6,
  },
});
