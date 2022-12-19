import { StyleSheet, View, Text, ScrollView } from "react-native";
import { GlobalStyles } from "../constants/styles";
import { useState } from "react";
import LoadingOverlay from "../components/Animations/LoadingOverlay";

function HowToUseScreen() {

  const [isLoading, setIsLoading ] = useState(true);
  setTimeout(() => {
    setIsLoading(false);
    }, 2000);
  if (isLoading) {
    return <LoadingOverlay size = {100} />
  }
  return (
    <ScrollView
      showsVerticalScrollIndicator={false} //hides the scroll bar
      contentContainerStyle={{
        flexGrow: 1,
      }}
    >
      <View style={styles.container}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}> Sign Language Recognition</Text>
        </View>
        <View style={styles.sectionContainer}>
          <View style={styles.section}>
            <Text style={styles.sectionTitle}> 1.Customize a Gesture</Text>

            <Text style={styles.text}>
              {"\u25CF"} Switch to Custom Gesture Generation tab from the
              options at the bottom of the screen.
              {"\n"}
              {"\u25CF"} Open camera and place your hand inside the rectangular
              box on the screen.{"\n"}
              {"\u25CF"} Adjust the camera light as needed. {"\n"}
              {"\u25CF"} Assigning Label To custom generated Gesture {"\n"}
              {"\u25CF"} Save the gesture.
              {"\n"}
              {"\u25CF"} Scanning & testing newly generated gesture. {"\n"}
            </Text>
          </View>
        </View>
        <View style={styles.sectionContainer}>
          <View style={styles.section}>
            <Text style={styles.sectionTitle}> 2.Scan a Gesture</Text>

            <Text style={styles.text}>
              {"\u25CF"} Click on Single Scan Gesture option {"\n"}
              {"\u25CF"} Open the camera and place your hand inside the
              rectangular box on the screen{"\n"}
              {"\u25CF"} Adjust the camera light as needed. {"\n"}
              {"\u25CF"} Click on Start Scan. {"\n"}
              {"\u25CF"} Scan stored Gesture. {"\n"}
              {"\u25CF"} Stop when delimiter encounters {"\n"}
            </Text>
          </View>
        </View>
        <View style={styles.sectionContainer}>
          <View style={styles.section}>
            <Text style={styles.sectionTitle}> 3. Create a Sentence</Text>

            <Text style={styles.text}>
              {"\u25CF"} Click on Scan Sentence option {"\n"}
              {"\u25CF"} Open the camera and place your hand inside the
              rectangular box on the screen{"\n"}
              {"\u25CF"} Adjust the camera light as needed. {"\n"}
              {"\u25CF"} Using stream of characters along with gestures form a
              sentence. {"\n"}
              {"\u25CF"} Click on Save {"\n"}
            </Text>
          </View>
        </View>
        <View style={styles.sectionContainer}>
          <View style={styles.section}>
            <Text style={styles.sectionTitle}> 4.Export to a File</Text>

            <Text style={styles.text}>

              {"\u25CF"} The sentence created is a combination of gestures. You can view these individual gestuer by clicking on the "View Gesture" Button {"\n"}
              {"\u25CF"} The sentence created can be exported as a .txt file {"\n"}
              {"\u25CF"} Click Save "Output Button" and choose the location where you want to save the file {"\n"}
            </Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

export default HowToUseScreen;

const styles = StyleSheet.create({
  container: {
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

  section: {
    padding: 8,
    textAlign: "center",
    margin: 8,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: GlobalStyles.colors.buttonColor,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: GlobalStyles.colors.buttonColor,
    textAlign: "center",
    marginBottom: 8,
  },

  textContainer: {
    padding: 16,
    paddingTop: 16,
    borderWidth: 1,
    borderRadius: 8,
    borderColor: GlobalStyles.colors.buttonColor,
  },
  text: {
    fontSize: 18,
    color: GlobalStyles.colors.buttonColor,
    // textAlign: "flex-start",
  },
});
