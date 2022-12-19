import { View, Text } from "react-native";
import CameraOutput from "../components/Camera/CameraOutput";

function ScanSingleGestureScreen() {
  return (
    <CameraOutput singleGesture={true}/>
  );
}

export default ScanSingleGestureScreen;
