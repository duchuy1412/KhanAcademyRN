import React from "react";
import { View, Button, StyleSheet, RefreshControl } from "react-native";
import { TouchableOpacity, ScrollView } from "react-native-gesture-handler";
import { Ionicons } from "@expo/vector-icons";
import { Button as MDButton } from "react-native-paper";

import _l from "../lib/i18n";
import RecentLessons from "../components/RecentLessons/RecentLessons";
import BrowseTopic from "../components/BrowseTopic/BrowseTopic";
import Spinner from "react-native-loading-spinner-overlay";
import firebase from "../lib/firebase";
import MyCourses from "../components/MyCourses/MyCourses";
export default class HomeScreen extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
      isLoading: false,
      refreshing: false,
    };
  }

  _onPressSettingIcon = () => {
    this.props.navigation.navigate("Settings");
  };

  _handleRefresh = () => {
    this.fetchData();
  };

  componentDidMount() {
    this.fetchData();
  }

  fetchData = async () => {
    let data = [];

    this.setState({ isLoading: true });
    try {
      await firebase
        .database()
        .ref("topic/")
        .on("value", (snapshot) => {
          data = snapshot.val();
        });
      this.setState({ data: data, isLoading: false });
    } catch (e) {}
  };
  render() {
    const { navigation } = this.props;

    navigation.setOptions({
      title: "Khan Academy",

      //Right Header
      headerRightContainerStyle: { margin: 20, padding: 5 },
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
        <ScrollView
          refreshControl={
            <RefreshControl
              refreshing={this.state.refreshing}
              onRefresh={this._handleRefresh}
            />
          }
        >
          <RecentLessons navigation={navigation} />
          <MyCourses />
          <BrowseTopic data={this.state.data} navigation={navigation} />
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({});
