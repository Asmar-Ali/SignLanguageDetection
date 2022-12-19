import { Pressable, Text, View, StyleSheet } from "react-native";
import { GlobalStyles } from "../../constants/styles";

function CustomButton({ children, onPress, style , isMain , flat}) {
    // some configurable styles can also be received from parent components

  return (
    <View style ={style}>
      <Pressable onPress={onPress} style = {({pressed}) => pressed && styles.pressed}>
        <View style={[styles.button,style,flat && styles.flat]}>
          <Text style={[styles.buttonText, isMain && styles.main , flat && styles.flatText]}>{children}</Text>
        </View>
      </Pressable>
    </View>
  );
}

export default CustomButton;

const styles = StyleSheet.create({
  button: {
    borderRadius: 18,
    minHeight : 45,
    maxWidth : 180,
    padding: 8,
    justifyContent : 'center',
    backgroundColor: GlobalStyles.colors.buttonColor,
    paddingHorizontal : 12,
    textAlign : 'center'
  },
  flat: {
    backgroundColor: "transparent",
  },
  buttonText: {
    // color: GlobalStyles.colors.buttonColor,
    textAlign: "center",
    fontSize : 16
  },
  flatText: {
    color :  GlobalStyles.colors.menuScreenBG,
    fontSize : 18,
  },
  pressed: {
    opacity: 0.55,
    color: GlobalStyles.colors.primary100,
    borderRadius: 16,
  },
  main : {
    fontSize : 18,
    borderRadius: 18,
    textAlign :'center'
    
  }
});
