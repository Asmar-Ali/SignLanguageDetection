import { View, Text, StyleSheet } from "react-native";
import { GlobalStyles } from "../../constants/styles";

function ShowOutput() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Output:</Text>
      <View style={styles.output}>
        <Text style={{ color: GlobalStyles.colors.buttonColor }}>
          Thank you!
        </Text>
      </View>
    </View>
  );
}

export default ShowOutput;

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    padding: 6,
    marginHorizontal: 4,
    minHeight: 60,
    minWidth: 150,
  },
  text: {
    fontSize: 16,
    fontWeight: "bold",
  },
  output: {
    fontSize: 14,
    marginTop: 8,
    backgroundColor: GlobalStyles.colors.menuScreenBG,
    minHeight: 40,
    maxHeight: 100,
    maxWidth: 140,
    borderRadius: 6,
    padding: 8,
  },
});
