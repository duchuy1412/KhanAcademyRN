import React from "react";
import { View, Text, Button } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import UnderContruction from "../components/UnderContruction";

export default class SearchScreen extends React.Component {
  render() {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#fff",
        }}
      >
        <UnderContruction />
      </View>
    );
  }
}
