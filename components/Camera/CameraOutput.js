import { View, StyleSheet } from "react-native";
import { Text } from "react-native";
import { GlobalStyles } from "../../constants/styles";
import Footer from "../UI/Footer";
import SentenceComponent from "../UI/SentenceComponent";
import ImagePicker from "./ImagePicker";
import Output from "./Output";

function CameraOutput({ singleGesture, sentenceMode }) {
  console.log("Sentence mode in camera output", sentenceMode);

  return (
    <View style={styles.container}>
      <ImagePicker singleGesture={singleGesture} />
      <Output singleGesture={singleGesture} />
      {(sentenceMode && singleGesture) && <SentenceComponent />}
      {/* <SentenceComponent /> */}
      <Footer />
     
    </View>
  );
}

export default CameraOutput;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: GlobalStyles.colors.menuScreenBG,
    // flexDirection: "column",
  },
});
