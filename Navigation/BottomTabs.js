import { StyleSheet , Image, View} from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import CustomizeGestureScreen from "../screens/CustomizeGesture";
import IconButton from "../components/UI/IconButton";
import {
  Ionicons,
  MaterialIcons,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import { GlobalStyles } from "../constants/styles";
import ScanSingleGestureScreen from "../screens/ScanSingleGesture";
import CreateSentenceScreen from "../screens/CreateSentence";
import ExportFileScreen from "../screens/ExportFile";
import ExitAppScreen from "../screens/ExitApp";

const BottomTabs = createBottomTabNavigator();

function BottomNavigator() {
  return (
    <BottomTabs.Navigator
      screenOptions={({ navigation }) => ({
        headerStyle: { 
          // backgroundColor: GlobalStyles.colors.buttonColor 
          backgroundColor: "lightblue" 
        },
        headerTintColor: GlobalStyles.colors.menuScreenBG,
        tabBarStyle: {
          // backgroundColor: GlobalStyles.colors.buttonColor,
          backgroundColor: "lightblue",
          height: 60,
          position : 'absolute',
          marginHorizontal : 16,
          marginVertical : 8,
          borderRadius : 10
        },
        // tabBarActiveBackgroundColor: "rgb(37, 150, 190)",
        tabBarActiveTintColor: GlobalStyles.colors.menuScreenBG,
        tabBarShowLabel: false,
        tabBarHideOnKeyboard : true,
        tabBarInactiveTintColor: "lightyellow",
        // headerRight: ({ tintColor }) => (
        //   <View style = {styles.imageContainer}>
        //   <Image
        //     source={require("../assets/hand.png")}
        //     style={styles.image}
        //   />
        // </View>
        // ),

        headerLeft: ({ tintColor }) => (
          <IconButton
          icon="home"
          size={24}
          color={tintColor}
          onPress={() => {
            //   dispatch(logoutReducer());
          }}
        />
        ),
      })}
    >
      <BottomTabs.Screen
        name="CustomizeGesture"
        component={CustomizeGestureScreen}
        options={{
          title: "Customize Gesture",
          tabBarLabel: "",
          tabBarIcon: ({ color, focused }) => (
            <MaterialIcons name='create-new-folder' color={color} size={focused ? 40 : 32} />
          ),
          headerTitleAlign: "center",
        }}
      />
      <BottomTabs.Screen
        name="ScanSingleGesture"
        component={ScanSingleGestureScreen}
        options={{
          title: "Scan Single Gesture",
          tabBarLabel: "",
          tabBarIcon: ({ color, focused }) => (
            <Ionicons name="md-scan-sharp" size={focused ? 40 : 32} color={color} />
          ),
          headerTitleAlign: "center",
        }}
      />
      <BottomTabs.Screen
        name="CreateSentence"
        component={CreateSentenceScreen}
        options={{
          title: "Create Sentence",
          tabBarLabel: "",
          tabBarIcon: ({ color, focused }) => (
            <MaterialCommunityIcons name="line-scan" size={focused ? 40 : 32} color={color} />
          ),
          headerTitleAlign: "center",
        }}
      />
      <BottomTabs.Screen
        name="ExportFile"
        component={ExportFileScreen}
        options={{
          title: "Export to File",
          tabBarLabel: "",
          tabBarIcon: ({ color, focused }) => (
            <MaterialCommunityIcons
              name="folder-download"
              size={focused ? 40 : 32}
              color={color}
            />
          ),
          headerTitleAlign: "center",
        }}
      />
      <BottomTabs.Screen
        name="Exit"
        component={ExitAppScreen} // this is a button in the tab bar, pass an empty component
        options={{
          title: "Exit App",
          tabBarLabel: "",
          //   tabBarButton: (props) => (<ExitAppScreen {...props} />),    // component to be rendered on press

          tabBarIcon: ({ color, focused }) => (
            <Ionicons name="exit" size={focused ? 40 : 32} color={color} />
          ),
          headerTitleAlign: "center",
        }}
      />
    </BottomTabs.Navigator>
  );
}

export default BottomNavigator;

const styles = StyleSheet.create({
  iconContainer: {
    padding: 8,
    alignItems: "center",
    justifyContent: "center",
    height: 100,
    width: "80%",
  },
  image: {
    width: "100%",
    color: "white",
    flex: 1,
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
