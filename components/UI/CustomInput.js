import { TextInput, Text, View, StyleSheet } from "react-native";
import { GlobalStyles } from "../../constants/styles";

function CustomInput({ label, textInputConfig, style }) {
  let inputStyles = [styles.input];
  return (
    <View style={[styles.inputContainer]}>
      <Text style={styles.label}>{label}</Text>
      <TextInput {...textInputConfig} style={inputStyles} />
    </View>
  );
}

export default CustomInput;

const styles = StyleSheet.create({
  inputContainer: {
    marginHorizontal: 4,
    marginVertical: 4,
  },
  label: {
    fontSize: 14,
    color: GlobalStyles.colors.menuScreenBG,
    paddingHorizontal: 6,
    marginBottom: 4,
  },
  input: {
    backgroundColor: GlobalStyles.colors.menuScreenBG,
    minHeight: 40,
    color: GlobalStyles.colors.buttonColor,
    padding: 8,
    fontSize: 16,
    borderRadius: 6,
  }
});
