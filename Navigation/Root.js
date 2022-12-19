import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { GlobalStyles } from "../constants/styles";
import AboutScreen from "../screens/About";
import CustomizeGestureScreen from "../screens/CustomizeGesture";
import GestureSignsScreen from "../screens/GestureSigns";
import HowToUseScreen from "../screens/HowToUse";
import MenuScreen from "../screens/MenuScreen";
import RealtimeScreen from "../screens/Realtime";
import ScanSingleGestureScreen from "../screens/ScanSingleGesture";
import BottomNavigator from "./BottomTabs";

function Root() {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="MenuScreen"
        component={MenuScreen}
        options={{
          headerStyle: {
            backgroundColor: "lightblue",
          },
          title: "Main Menu",
          headerTintColor: GlobalStyles.colors.menuScreenBG,
          headerTitleAlign: "center",
        }}
      />
      <Stack.Screen
        name="GestureSigns"
        component={GestureSignsScreen}
        options={{
          headerStyle: {
            backgroundColor:  'lightblue',
          },
          title: "Main Menu",
          headerTintColor: GlobalStyles.colors.menuScreenBG,
          headerTitleAlign: "center",
        }}
      />
      <Stack.Screen
        name="HowToUse"
        component={HowToUseScreen}
        options={{
          headerStyle: {
            backgroundColor:  'lightblue',
          },
          title: "User Manual",
          headerTintColor: GlobalStyles.colors.menuScreenBG,
          headerTitleAlign: "center",
        }}
      />
      <Stack.Screen
        name="AboutScreen"
        component={AboutScreen}
        options={{
          headerStyle: {
            backgroundColor: 'lightblue',
          },
          title: "About",
          headerTintColor: GlobalStyles.colors.menuScreenBG,
          headerTitleAlign: "center",
        }}
      />
      <Stack.Screen
        name="RealtimeScreen"
        component={RealtimeScreen}
        options={{
          headerStyle: {
            backgroundColor: 'lightblue',
          },
          title: "About",
          headerTintColor: GlobalStyles.colors.menuScreenBG,
          headerTitleAlign: "center",
        }}
      />
      
      <Stack.Screen
        name="Authenticated"
        component={BottomNavigator}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="BottomTabs"
        component={BottomNavigator}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}

export default Root;
