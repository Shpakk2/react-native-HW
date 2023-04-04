import React from "react";
import {TouchableOpacity,} from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Feather} from "@expo/vector-icons";

import CommentsScreen from "./CommentsScreen"
import MapScreen from "./MapScreen"
import DefaultPostsScreen from "./DefaultPostsScreen"

const NestedScreen = createNativeStackNavigator();

const PostsScreen = () => {
  return (
    <NestedScreen.Navigator>
      <NestedScreen.Screen
        name="DefaultPostsScreen"
        component={DefaultPostsScreen}
        options={{
          title: "Posts",
          headerTitleAlign: "center",
          headerRight: () => (
            <TouchableOpacity style={{ paddingRight: 16 }}>
              <Feather name="log-out" size={24} color="#BDBDBD" />
            </TouchableOpacity>
          ),
        }}
      />
      <NestedScreen.Screen
        name="CommentsScreen"
        component={CommentsScreen}
        options={{
          title: "comments",
          headerTitleAlign: "center",
        }}
      />
      <NestedScreen.Screen
        name="MapScreen"
        component={MapScreen}
        options={{
          title: "Map",
          headerTitleAlign: "center",
        }}
      />
    </NestedScreen.Navigator>
  );
};

export default PostsScreen;