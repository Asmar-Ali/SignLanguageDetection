import { View, StyleSheet, Text } from "react-native";
import { GlobalStyles } from "../constants/styles";
import CustomButton from "../components/UI/CustomButton";

function RealtimeScreen({ navigation }) {
  const isMain = 1;

  function pressHandler() {
    navigation.navigate("BottomTabs");
  }

  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.titleText}>Realtime Features</Text>
      </View>
      <View style={styles.card}>
        <View style={styles.buttonContainer}>
          <CustomButton
            isMain={isMain}
            onPress={pressHandler}
            style={styles.button}
          >
            Customize Gesture
          </CustomButton>
        </View>
        <View style={styles.buttonContainer}>
          <CustomButton
            isMain={isMain}
            onPress={pressHandler}
            style={styles.button}
          >
            Scan a Gesture
          </CustomButton>
        </View>
        <View style={styles.buttonContainer}>
          <CustomButton
            isMain={isMain}
            onPress={pressHandler}
            style={styles.button}
          >
            Create Sentence
          </CustomButton>
        </View>
        <View style={styles.buttonContainer}>
          <CustomButton
            isMain={isMain}
            onPress={pressHandler}
            style={styles.button}
          >
            Export
          </CustomButton>
        </View>
      </View>
    </View>
  );
}

export default RealtimeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: GlobalStyles.colors.menuScreenBG,
    padding: 16,
    alignItems: "center",
  },
  card: {
    height: 500,
    marginHorizontal: 8,
    padding: 16,
    backgroundColor: "#678983",
    borderRadius: 26,
    borderWidth: 1,
    shadowColor: "white",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.75,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonContainer: {
    marginTop: 16,
    marginHorizontal: 40,
    alignItems: "center",
  },
  button: {
    minWidth: 200,
    marginVertical: 8,
    textAlign : "center",
    backgroundColor: "#D4ECDD",
    borderRadius: 16,
  },
  titleContainer: {
    padding: 8,
    marginVertical: 16,
    alignItems: "center",
    textAlign: "center",
  },
  titleText: {
    fontSize: 22,
    fontWeight: "bold",
    color : GlobalStyles.colors.buttonColor
  },
});
