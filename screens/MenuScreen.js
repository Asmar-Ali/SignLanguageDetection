import { View, Text, Image, StyleSheet } from "react-native";
import CustomButton from "../components/UI/CustomButton";
import { GlobalStyles } from "../constants/styles";

function MenuScreen({ navigation }) {
  function realtimeHandler() {
    navigation.navigate("RealtimeScreen");
  }
  function aboutHandler() {
    navigation.navigate("AboutScreen");
  }
  function gestureHandler() {
    navigation.navigate("GestureSigns");
  }
  function loginHandler() {
    navigation.replace("Authenticated");
  }
  function howToUseHandler() {
    navigation.navigate("HowToUse");
  }
  const isMain = 1;
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>RSLD</Text>
        <Text style= {{fontSize : 16, color : 'white', textAlign : 'center'}}>Real Time Sign Language Detection</Text>
        <View style = {styles.imageContainer}>
          <Image
            source={require("../assets/hand.png")}
            style={styles.image}
          />
        </View>
      </View>
      <View style={styles.buttonContainer}>
        <CustomButton
          isMain={isMain}
          onPress={realtimeHandler}
          style={styles.button}
        >
          Real Time
        </CustomButton>
      </View>
      <View style={styles.buttonContainer}>
        <CustomButton
          isMain={isMain}
          onPress={howToUseHandler}
          style={styles.button}
        >
          How to use
        </CustomButton>
      </View>
      <View style={styles.buttonContainer}>
        <CustomButton
          isMain={isMain}
          onPress={gestureHandler}
          style={styles.button}
        >
          Gesture Signs
        </CustomButton>
      </View>
      <View style={styles.buttonContainer}>
        <CustomButton
          isMain={isMain}
          onPress={aboutHandler}
          style={styles.button}
        >
          About
        </CustomButton>
      </View>
      <View style={styles.buttonContainer}>
        <CustomButton
          isMain={isMain}
          onPress={loginHandler}
          style={styles.button}
        >
          Login
        </CustomButton>
      </View>
    </View>
  );
}
export default MenuScreen;

const styles = StyleSheet.create({
  container: {
    padding: 8,
    flex: 1,
    justifyContent: "center",
    backgroundColor: GlobalStyles.colors.menuScreenBG,
  },
  buttonContainer: {
    marginTop: 16,
    marginHorizontal: 40,
    alignItems: "center",
  },
  button: { minWidth: 180, borderRadius: 20, minHeight: 60 },
  titleContainer: {
    padding: 8,
    marginBottom: 18,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    textAlign: "center",
    color: GlobalStyles.colors.buttonColor,
  },
  imageContainer :{
     alignItems :'center',
     marginVertical : 8
  },
  image: {
    width: "20%",
    height: 60,
  },
});
