import { View, Text, StyleSheet } from "react-native";
import { useState } from "react";
import { GlobalStyles } from "../../constants/styles";

function SentenceComponent() {
  //   const [gestureValue, setGestureValue] = useState();
  return (
    <View style={styles.container}>
      <Text
        style={{
          fontSize: 16,
          fontWeight: "bold",
          color: GlobalStyles.colors.buttonColor,
        }}
      >
        Sentence
      </Text>
      <View style={styles.textContainer}>
        <Text style={styles.text}>Hi </Text>
      </View>
    </View>
  );
}

export default SentenceComponent;

const styles = StyleSheet.create({
  container: {
    minHeight: 40,
    maxHeight: 70,
    maxWidth: 500,
    padding: 8,
    marginHorizontal: 16,
    marginTop: 8,
    padding: 4,
  },
  textContainer: {
    borderRadius: 8,
    borderWidth: 0.5,
    padding: 8,
    backgroundColor: GlobalStyles.colors.buttonColor,
    marginTop: 4,
  },
  text: {
    fontSize: 16,
  },
  title: {},
});
