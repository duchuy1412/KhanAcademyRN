import React from "react";
import { View, Button } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Ionicons } from "@expo/vector-icons";
import { Button as MDButton } from "react-native-paper";

import _l from "../lib/i18n";
import RecentLessons from "../components/RecentLessons/RecentLessons";
export default class HomeScreen extends React.Component {
  _onPressSettingIcon = () => {
    this.props.navigation.navigate("Settings");
  };

  async componentDidMount() {}
  clickAdd = async () => {
    // firebase.database().ref("users/").set({
    //   highscore: 123,
    //   name: "Hoc",
    // });
    // firebase
    //   .database()
    //   .ref("topic/")
    //   .on("value", (snapshot) => {
    //     console.log(snapshot.val());
    //   });
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
        <RecentLessons />
        <MDButton
          icon="folder"
          mode="contained"
          onPress={() => navigation.navigate("CourseList")}
        >
          Go to Course List
        </MDButton>
        <Button title="Add" onPress={this.clickAdd}></Button>
      </View>
    );
  }
}
