import { View, Image, StyleSheet } from "react-native";
import { GlobalStyles } from "../constants/styles";
import { useState } from "react";
import LoadingOverlay from "../components/Animations/LoadingOverlay";
function GestureSignsScreen() {
  const [isLoading, setIsLoading] = useState(true);
  setTimeout(() => {
    setIsLoading(false);
  }, 2000);
  if (isLoading) {
    return <LoadingOverlay size={100} />;
  }
  return (
    <View style={styles.screen}>
      <View style={styles.imageContainer}>
        <Image source={require("../assets/sign.jpg")} style={styles.image} />
      </View>
    </View>
  );
}

export default GestureSignsScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: GlobalStyles.colors.menuScreenBG,
  },
  imageContainer: {
    paddingHorizontal: 8,
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
  image: {
    width: "100%",
    height: 450,
    resizeMode: "contain",
    borderRadius: 8,
    elevation: 2,
    borderWidth: 1,
    borderColor: "black",
    shadowColor: "black",
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.35,
  },
});
