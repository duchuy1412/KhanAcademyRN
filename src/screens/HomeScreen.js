import React from "react";
import { View, Text } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Ionicons } from "@expo/vector-icons";
import {
  Avatar,
  Button,
  Card,
  Title,
  Paragraph,
  Checkbox,
} from "react-native-paper";
import _l from "../lib/i18n";

const LeftContent = (props) => <Avatar.Icon {...props} icon="folder" />;
export default class HomeScreen extends React.Component {
  state = {
    checked: false,
  };

  _onPressSettingIcon = () => {
    this.props.navigation.navigate("Settings");
  };

  render() {
    const { navigation } = this.props;
    const { checked } = this.state;

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

    return <View></View>;
  }
}
