import React, { useEffect, useState } from "react";
import { FlatList, Image, Text, TouchableOpacity, View } from "react-native";
import { Feather } from "@expo/vector-icons";

import styles from "../Styles";

const DefaultPostsScreen = ({ navigation, route }) => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    if (route.params) setPosts((prev) => [...prev, route.params]);
  }, [route.params]);

  return (
    <View style={styles.container}>
      <View style={styles.containerPostsScreen}>
        <View style={styles.userInfo}>
          <Text>User info</Text>
        </View>
        <FlatList
          data={posts}
          keyExtractor={(item, indx) => indx.toString()}
          renderItem={({ item }) => (
            <View style={styles.postItem}>
              <Image
                source={{ uri: item.photo }}
                style={{ height: 240, width: "100%", borderRadius: 8 }}
              />
              <Text style={styles.postItemName}>{item.name}</Text>
              <View style={styles.postItemAttr}>
                <TouchableOpacity
                  style={styles.postItemLinkMsg}
                  onPress={() => navigation.navigate("CommentsScreen")}
                >
                  <Feather
                    name="message-circle"
                    size={24}
                    color="#BDBDBD"
                    style={{ marginRight: 6 }}
                  />
                  <Text
                    style={{ ...styles.postItemLinkText, color: "#BDBDBD" }}
                  >
                    0
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.postItemLinkLoc}
                  onPress={() => {
                    navigation.navigate("MapScreen", {
                      latitude: item.latitude,
                      longitude: item.longitude,
                    });
                  }}
                >
                  <Feather
                    name="map-pin"
                    size={24}
                    color="#BDBDBD"
                    style={{ marginRight: 3 }}
                  />
                  <Text
                    style={{
                      ...styles.postItemLinkText,
                      textDecorationLine: "underline",
                    }}
                  >
                    {item.locationName}
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          )}
        />
      </View>
    </View>
  );
};

export default DefaultPostsScreen;