import { useFonts } from "expo-font";
import { Slot, SplashScreen } from "expo-router";
import { useEffect } from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import "./global.css";


SplashScreen.preventAutoHideAsync

const RootLayout = () => {
  const [fontsLoaded, error] = useFonts({
    "work-black": require("../assets/fonts/WorkSans-Black.ttf"),
    "work-light": require("../assets/fonts/WorkSans-Light.ttf"),
    "work-medium": require("../assets/fonts/WorkSans-Medium.ttf"),
  });

  useEffect(() => {
    if (error) {
      throw error;
    }

    if (fontsLoaded) {
      SplashScreen.hideAsync(); // quitamos el splash screen
    }

  }, [fontsLoaded, error]);


  if(!fontsLoaded && !error) return null;

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Slot />
    </GestureHandlerRootView>
  );
};

export default RootLayout;