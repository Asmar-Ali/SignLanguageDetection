import { StyleSheet, View, Text } from "react-native";
import { GlobalStyles } from "../constants/styles";
import { useState } from "react";
import LoadingOverlay from "../components/Animations/LoadingOverlay";
function AboutScreen() {
  const [isLoading, setIsLoading ] = useState(true);
  setTimeout(() => {
    setIsLoading(false);
    }, 2000);
  if (isLoading) {
    return <LoadingOverlay size = {100} />
  }
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}> Sign Language Recognition</Text>
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.text}>
          Sign Language is a gesture-based language which involves hand
          movements, hand orientation and facial expression instead of acoustic
          sound patterns. {"\n"}
          {"\n"}
          This application employs image processing to scan hand gestures. You
          can add a new customized gesture and scan an individual gesture to
          find its reference. Another amazing feature is to create sentences in
          this app and export them as a text file.
        </Text>
      </View>
    </View>
  );
}

export default AboutScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: GlobalStyles.colors.menuScreenBG,
  },
  titleContainer: {
    padding: 16,
    margin: 16,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    textAlign: "center",
    fontSize: 24,
    fontWeight: "bold",
    color: GlobalStyles.colors.buttonColor,
  },
  textContainer: {
    padding: 16,
    paddingTop : 16,
    borderWidth : 1,
    borderRadius : 8,
    borderColor : GlobalStyles.colors.buttonColor
  },
  text: {
    fontSize: 18,
    color: GlobalStyles.colors.buttonColor,
    textAlign: "center",
  },
});
