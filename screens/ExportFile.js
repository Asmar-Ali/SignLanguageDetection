import { View, Text, StyleSheet, Alert } from "react-native";
import { StorageAccessFramework } from 'expo-file-system';
import Footer from "../components/UI/Footer";
import { GlobalStyles } from "../constants/styles";
import * as FileSystem from 'expo-file-system';

function ExportFileScreen() {
  async function exportFileHandler() {
    const permissions = await StorageAccessFramework.requestDirectoryPermissionsAsync();
if (!permissions.granted) {
    return;
}
  const fileName = 'text'   //should be without extension
  const fileContent = 'This is a demo sentence';
try {
    await StorageAccessFramework.createFileAsync(permissions.directoryUri, fileName, 'text/plain')
    .then(async (uri) => {
      console.log("URI", uri)
      await FileSystem.writeAsStringAsync(uri, fileContent);
      Alert.alert("Success" , "Your file has been saved successfully !")
    })
    .catch((e) => {
        console.log(e);
    });
} catch(e) {
    console.log(e);
};

}
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Output Sentence</Text>
      </View>
      <View style={styles.optContainer}>
        <Text style={styles.output}>This is a demo sentence</Text>
      </View>
      <Footer fileExport={true} onSubmit={exportFileHandler} />
    </View>
  );
}

export default ExportFileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 4,
    backgroundColor: GlobalStyles.colors.menuScreenBG,
  },
  titleContainer: {
    padding: 4,
    justifyContent: "center",
    marginTop: 52,
    alignItems: "center",
    textAlign: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: GlobalStyles.colors.buttonColor,
  },
  optContainer: {
    padding: 8,
    backgroundColor: GlobalStyles.colors.buttonColor,
    minHeight: 150,
    borderRadius: 8,
    borderWidth: 0.5,
    marginTop: 36,
    marginHorizontal: 8,
  },
  output: {
    fontSize: 16,
  },
});
