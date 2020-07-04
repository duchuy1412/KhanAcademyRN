import React, { Component } from "react";
import { View, Text, Image } from "react-native";
import { List } from "react-native-paper";
import imageMember from "../assets/leafMember.png";
export const UserInfo = (props) => {
  const { user } = props;
  return (
    <View>
      <List.Item
        style={{ backgroundColor: "#fff" }}
        title={user.displayName || user.email}
        titleStyle={{ fontSize: 18, fontWeight: "bold" }}
        description="1024 energy points"
        left={() => (
          <Image
            source={user.photoURL ? { uri: user.photoURL } : imageMember}
            style={{
              height: 64,
              width: 64,
              marginLeft: 8,
            }}
            resizeMode="contain"
          />
        )}
      />
    </View>
  );
};

export default UserInfo;
