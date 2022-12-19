import { StyleSheet, View } from "react-native";
import { MotiView } from "@motify/components";
import { GlobalStyles } from "../../constants/styles";
import * as React from "react";
function LoadingOverlay({ size }) {
  return (
    <View style={styles.container}>
      <MotiView
        from={{
          width: size,
          height: size,
          borderRadius: size / 2,
          borderWidth: 0,
          shadowOpacity: 0.5,
        }}
        animate={{
          width: size + 30,
          height: size + 30,
          borderRadius: (size + 30) / 2,
          borderWidth: size / 10,
          shadowOpacity: 0.5,
        }}
        transition={{
          type: "timing",
          duration: 1000,
          loop: true,
          // repeatReverse : false
        }}
        style={{
          width: size,
          height: size,
          borderRadius: size / 2,
          borderWidth: size / 10,
          borderColor: "#fff",
          shadowColor: "#fff",
          shadowOffset: { width: 0, height: 0 },
          shadowOpacity: 1,
          shadowRadius: 10,
        }}
      />
    </View>
  );
}
export default LoadingOverlay;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: GlobalStyles.colors.menuScreenBG,
  },
  loader: {},
});
