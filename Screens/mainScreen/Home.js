import React from "react";
import { TouchableOpacity } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Feather } from "@expo/vector-icons";
import { useDispatch } from "react-redux";

import { logOut } from "../../redux/auth/authOperations";
import PostsScreen from './PostsScreen'
import ProfileScreen from "./ProfileScreen"
import CreatePostsScreen from "./CreatePostsScreen"

const MainTab = createBottomTabNavigator();

const Home = ({ navigation }) => {
    const dispatch = useDispatch();
  return (
    <MainTab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: {
          height: 70,
          paddingHorizontal: 80,
          paddingTop: 10,
          paddingBottom: 20,
        },
        tabBarActiveBackgroundColor: "#FF6C00",
        tabBarInactiveBackgroundColor: "transparent",
        tabBarActiveTintColor: "#FFFFFF",
        tabBarInactiveTintColor: "rgba(33, 33, 33, 0.8)",
        tabBarItemStyle: {
          height: 40,
          width: 70,
          borderRadius: 20,
        },
      }}
    >
      <MainTab.Screen
        name="Posts"
        component={PostsScreen}
        options={{
          title: "Posts",
          headerTitleAlign: "center",
          headerRight: () => (
            <TouchableOpacity
              style={{ paddingRight: 16 }}
              onPress={() => {
                dispatch(logOut());
              }}
            >
              <Feather name="log-out" size={24} color="#BDBDBD" />
            </TouchableOpacity>
          ),
          tabBarIcon: ({ color }) => (
            <Feather name="grid" size={24} color={color} />
          ),
        }}
      />
      <MainTab.Screen
        name="CreatePosts"
        component={CreatePostsScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <Feather name="plus" size={24} color={color} />
          ),
          title: "Create publication",
          headerTitleAlign: "center",
          headerLeft: () => (
            <TouchableOpacity
              style={{ paddingLeft: 16 }}
              onPress={() => navigation.navigate("Posts")}
            >
              <Feather name="arrow-left" size={24} color="#BDBDBD" />
            </TouchableOpacity>
          ),
          tabBarStyle: {
            display: "none",
          },
        }}
      />
      <MainTab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <Feather name="user" size={24} color={color} />
          ),
          headerShown: false,
        }}
      />
    </MainTab.Navigator>
  );
};

export default Home;