// prettier-ignore
import { Stack } from "expo-router";
import { useCallback } from "react";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";

SplashScreen.preventAutoHideAsync();

const Layout = () => {
  const [fontsLoaded, fontError] = useFonts({
    // prettier-ignore
    "DMSans-Bold": require("../assets/fonts/DMSans-Bold.ttf"),
    // prettier-ignore
    "DMSans-Medium": require("../assets/fonts/DMSans-Medium.ttf"),
    // prettier-ignore
    "DMSans-Regular": require("../assets/fonts/DMSans-Regular.ttf"),
  });
  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded || fontError) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return <Stack onLayout={onLayoutRootView} />;
};
export default Layout;
