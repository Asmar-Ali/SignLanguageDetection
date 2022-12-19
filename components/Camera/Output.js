import { View, Text, StyleSheet } from "react-native";
import { useState } from "react";
import { GlobalStyles } from "../../constants/styles";
import CustomInput from "../UI/CustomInput";
import ShowOutput from "../UI/ShowOutput";

function Output({ singleGesture }) {
  const [gestureValue, setGestureValue] = useState();
  function inputChangedHandler(enteredvalue) {
    setGestureValue(enteredvalue);
  }
  return (
    <View style={styles.container}>
      <View>
        {!singleGesture && (
          <CustomInput
            label="Enter Gesture Name"
            input={styles.input}
            textInputConfig={{
              onChangeText: inputChangedHandler,
              value: gestureValue,
            }}
          />
        )}
        {singleGesture && <ShowOutput />}
      </View>
      <View style={styles.maskWindow}>
        <Text style={styles.text}>Masked window</Text>
      </View>
    </View>
  );
}

export default Output;

const styles = StyleSheet.create({
  container: {
    minHeight: 200,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 8,
    borderRadius: 8,
    marginTop: 18,
    backgroundColor: GlobalStyles.colors.buttonColor,
    marginHorizontal: 16,
  },
  maskWindow: {
    height: 150,
    width: 150,
    padding: 4,
    marginTop: 6,
    borderRadius: 4,
    backgroundColor: GlobalStyles.colors.menuScreenBG,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 0.5,
    elevation: 2,
    shadowColor: "black",
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.35,
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
    color : GlobalStyles.colors.buttonColor
  },
  input: {
    alignItems: "flex-end",
    justifyContent: "flex-end",
  },
});
