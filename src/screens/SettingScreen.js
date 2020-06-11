import React from "react";
import { View, Text, Button } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

export default class SettingScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>Settings!</Text>
      </View>
    );
  }
}
