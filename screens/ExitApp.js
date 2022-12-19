import { StyleSheet, View, Text } from "react-native";
import CustomButton from "../components/UI/CustomButton";
import { GlobalStyles } from "../constants/styles";
import { useState } from "react";
import LoadingOverlay from "../components/Animations/LoadingOverlay";

function ExitAppScreen({ navigation }) {
  const [isLoading, setIsLoading] = useState(false);

  function cancelHandler() {
    navigation.navigate("CustomizeGesture");
  }
  function confirmHandler() {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      navigation.replace("MenuScreen");
    }, 2000);
  }
  if (isLoading) {
    return <LoadingOverlay size={100} />;
  }
  return (
    <View style={styles.container}>
      <View style={styles.modalView}>
        <Text style={styles.textStyle}>Are you sure you want to quit?</Text>
        <View style={styles.buttonContainer}>
          <CustomButton style={styles.button} onPress={cancelHandler}>
            Cancel
          </CustomButton>
          <CustomButton style={styles.button} onPress={confirmHandler}>
            Confirm
          </CustomButton>
        </View>
      </View>
    </View>
  );
}
export default ExitAppScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: GlobalStyles.colors.buttonColor,
    // alignItems : 'center',
    justifyContent: "center",
  },
  modalView: {
    margin: 20,
    minHeight: 200,
    backgroundColor: GlobalStyles.colors.menuScreenBG,
    borderRadius: 20,
    padding: 35,
    // alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },

  textStyle: {
    color: GlobalStyles.colors.buttonColor,
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 18,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "space-between",
    marginTop: 38,
    // backgroundColor : 'red',
  },
  button: {
    backgroundColor: GlobalStyles.colors.buttonColor,
    borderRadius: 20,
    color: GlobalStyles.colors.button,
    minWidth: 100,
  },
});
