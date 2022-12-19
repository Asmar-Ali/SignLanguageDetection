import { useState } from "react";
import LoadingOverlay from "../components/Animations/LoadingOverlay";
import CameraOutput from "../components/Camera/CameraOutput";
function CustomizeGestureScreen() {
  const [isLoading, setIsLoading ] = useState(true);
  setTimeout(() => {
    setIsLoading(false);
    }, 2000);
  if (isLoading) {
    return <LoadingOverlay size = {100} />
  }

  return (
 
      <CameraOutput />
    
  );
}

export default CustomizeGestureScreen;
