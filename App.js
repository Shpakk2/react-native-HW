import {
  Keyboard,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import LoginScreen from "./Screens/LoginScreen";
import RegistrationScreen from "./Screens/RegistrationScreen";
import styles from "./Screens/Styles";
import * as Font from "expo-font";
import { useState, useEffect } from "react";

export default function App() {
  const [fontsIsLoad, setfontsIsLoad] = useState(false);
  const [isKeyboardOpen, setIsKeyboardOpen] = useState(false);
  
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
  const keyboardHide = () => {
    setIsKeyboardOpen(false);
    Keyboard.dismiss();
  };

  return (
    <TouchableWithoutFeedback onPress={keyboardHide}>
      <View style={styles.container}>
  {"register" !== "login" ?           <RegistrationScreen
            keyboardHide={keyboardHide}
            setIsKeyboardOpen={setIsKeyboardOpen}
            isKeyboardOpen={isKeyboardOpen}
          /> :           <LoginScreen
            keyboardHide={keyboardHide}
            setIsKeyboardOpen={setIsKeyboardOpen}
            isKeyboardOpen={isKeyboardOpen}
          /> }
      </View>
    </TouchableWithoutFeedback>
  );
}