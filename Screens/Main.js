import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { updateUserStatus } from "../redux/auth/authOperations";
import { getIsLoggedIn } from "../redux/auth/authSelectors";

import RegistrationScreen from "./RegistrationScreen";
import LoginScreen from "./LoginScreen";
import Home from "./mainScreen/Home";
import MapScreen from "./mainScreen/MapScreen"
import CommentsScreen from "./mainScreen/CommentsScreen"

const AuthStack = createNativeStackNavigator();

export default function Main() {
  const isLogedIn = useSelector(getIsLoggedIn);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(updateUserStatus());
  }, [isLogedIn]);

  return (
    <NavigationContainer>
          <AuthStack.Navigator >
        {!isLogedIn ? (
          <>
            <AuthStack.Screen
              name="RegistrationScreen"
              component={RegistrationScreen}
              options={{ headerShown: false }}
            />
            <AuthStack.Screen
              name="LoginScreen"
              component={LoginScreen}
              options={{ headerShown: false }}
            />
          </>
        ) : (
          <>
            <AuthStack.Screen
              name="Home"
              component={Home}
              options={{ headerShown: false }}
            />
            <AuthStack.Screen
              name="CommentsScreen"
              component={CommentsScreen}
              options={{
                title: "Comments",
                headerTitleAlign: "center",
              }}
            />
            <AuthStack.Screen
              name="MapScreen"
              component={MapScreen}
              options={{
                title: "Map",
                headerTitleAlign: "center",
              }}
            />
          </>
        )}
      </AuthStack.Navigator>
    </NavigationContainer>
  );
}