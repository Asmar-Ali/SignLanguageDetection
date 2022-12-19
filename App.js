import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import Root from "./Navigation/Root";
import LoadingOverlay from "./components/Animations/LoadingOverlay";

export default function App() {
  return (
    <>
      <StatusBar style="auto" />
      <NavigationContainer>
        {/* <LoadingOverlay size = {100}/> */}
        <Root />
      </NavigationContainer>
    </>
  );
}
