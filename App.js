import { useState, useEffect } from "react";

import * as Font from "expo-font";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Home from "./Screens/mainScreen/Home"
import LoginScreen from "./Screens/LoginScreen";
import RegistrationScreen from "./Screens/RegistrationScreen";

const AuthStack = createNativeStackNavigator();

export default function App() {
  const [fontsIsLoad, setfontsIsLoad] = useState(false);
  const [isLogedIn, setIsLogedIn] = useState(true);
  
  const customFonts = {
    "Roboto-Regular": require("./assets/fonts/Roboto-Regular.ttf"),
    "Roboto-Medium": require("./assets/fonts/Roboto-Medium.ttf"),
    "Roboto-Bold": require("./assets/fonts/Roboto-Bold.ttf"),
  };

  useEffect(() => {
    async function loadFontsAsync() {
      await Font.loadAsync(customFonts);
      setfontsIsLoad(true);
    }
    loadFontsAsync();
  }, []);
  if (!fontsIsLoad) {
    return null;
  }

  return (
<NavigationContainer >
      <AuthStack.Navigator screenOptions={{ headerShown: false }} >
        <>
                                <AuthStack.Screen
            name="Home"
            component={Home}
          />
            <AuthStack.Screen
              name="RegistrationScreen"
              component={RegistrationScreen}
            />
            <AuthStack.Screen
              name="LoginScreen"
              component={LoginScreen}
            />
          </>

      </AuthStack.Navigator>
    </NavigationContainer>
  );
}