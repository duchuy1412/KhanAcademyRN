import React from "react";
import { View, Text, Button } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import UnderContruction from "../components/UnderContruction";
import _l from "../lib/i18n";
export default class SearchScreen extends React.Component {
  render() {
    const { navigation } = this.props;
    navigation.setOptions({
      title: _l.t("Search"),
    });
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
