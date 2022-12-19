import { View, StyleSheet, Alert } from "react-native";
import CustomButton from "./CustomButton";

function Footer({ fileExport , onSubmit}) {

  async function saveFileHandler () {
    await onSubmit();
  }
  function submitHandler(){}

  return (
    <View style={styles.container}>
      {!fileExport && (
        <CustomButton onPress={submitHandler} >
          Start Scan
        </CustomButton>
      )}
      {fileExport && (
        <CustomButton onPress={submitHandler} style={styles.button}>
          Gesture Viewer
        </CustomButton>
      )}
      {!fileExport && (
        <CustomButton onPress={submitHandler}>Save Scan</CustomButton>
      )}
      {fileExport && (
        <CustomButton style={styles.button} onPress = {saveFileHandler}>
          Save Output
        </CustomButton>
      )}
    </View>
  );
}
export default Footer;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    marginTop: 4,
    justifyContent: "space-around",
    marginHorizontal: 8,
    alignItems: "center",
    padding: 20,
  },
  button: {
    minHeight: 50,
    minWidth: 120,
  },
});
