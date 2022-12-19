import { useState } from "react";
import { View, Text, Alert, StyleSheet, Image } from "react-native";
import {
  launchCameraAsync,
  useCameraPermissions,
  PermissionStatus,
} from "expo-image-picker";
import CustomButton from "../UI/CustomButton";
import { GlobalStyles } from "../../constants/styles";

function ImagePicker({singleGesture}) {
  const [pickedImage, SetPickedImage] = useState();
  const [cameraPermissionInfo, requestPermission] = useCameraPermissions();
  async function verifyPermission() {
    if (cameraPermissionInfo.status === PermissionStatus.UNDETERMINED) {
      // we don't know if permission in granted
      const permissionResponse = await requestPermission();
      return permissionResponse.granted;
    }
    if (cameraPermissionInfo.status === PermissionStatus.DENIED) {
      Alert.alert(
        "Permission Denied",
        "You need camera access to perform this action."
      );
      return false;
    }
    return true; // neither is status undetermined, nor denied
  }

  async function imageHandler() {
    const hasPermission = await verifyPermission();
    if (!hasPermission) {
      return;
    }
    const image = await launchCameraAsync({
      aspect: [16, 9],
      quality: 0.5,
    });
    console.log(image);
    SetPickedImage(image.assets[0].uri);
  }

  let imagePreview = (
    <View>
     {!singleGesture && <Text style = {styles.text}>Want to add a custom gesture?</Text>}
     {singleGesture && <Text style = {styles.text}>Scan a gesture now?</Text>}
      <CustomButton style={styles.button} onPress={imageHandler} flat={true}>
        Click here!
      </CustomButton>
    </View>
  );
  if (pickedImage) {
    imagePreview = <Image source={{ uri: pickedImage }} style={styles.image} />;
  }
  return (
    <View style={styles}>
      <View style={styles.preview}>{imagePreview}</View>
    </View>
  );
}

export default ImagePicker;

const styles = StyleSheet.create({
  image: {
    height: "100%",
    width: "100%",
  },
  preview: {
    height: 250,
    marginTop : 40,
    borderRadius: 8,
    backgroundColor: GlobalStyles.colors.buttonColor,
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 16,
  },
  text: {
    fontSize: 16,
    color : GlobalStyles.colors.menuScreenBG
  },
  button: {
    justifyContent: "center",
    alignItems: "center",
    // color : GlobalStyles.colors.menuScreenBG
  },
});
