import React from "react";
import { View, Text } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Ionicons } from "@expo/vector-icons";
import _l from "../lib/i18n";
import Counter from "../components/Counter";
import { Button } from "react-native-paper";

export default class HomeScreen extends React.Component {
  _onPressSettingIcon = () => {
    this.props.navigation.navigate("Settings");
  };

  render() {
    const { navigation } = this.props;

    navigation.setOptions({
      title: "Khan Academy",

      //Right Header
      headerRightContainerStyle: { margin: 10, padding: 5 },
      headerRight: () => {
        return (
          <TouchableOpacity onPress={this._onPressSettingIcon}>
            <Ionicons name="md-settings" size={24} color="#2962ff" />
          </TouchableOpacity>
        );
      },
    });

    return (
      <View>
        <Button
          icon="camera"
          mode="contained"
          onPress={() => navigation.navigate("CourseList")}
        >
          Press me
        </Button>
      </View>
    );
  }
}
