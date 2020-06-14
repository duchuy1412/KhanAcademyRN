import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { List, Divider } from "react-native-paper";

export default class SettingScreen extends React.Component {
  render() {
    const { navigation } = this.props;
    return (
      <View style={{ flex: 1 }}>
        <List.Section>
          <List.Item
            style={styles.listItem}
            title="Sign in"
            titleStyle={styles.signIn}
            onPress={() => navigation.navigate("Welcome")}
          />
        </List.Section>

        <List.Section>
          <List.Item style={styles.listItem} title="Language & region" />
          <Divider />
          <List.Item style={styles.listItem} title="Download settings" />
        </List.Section>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  listItem: {
    backgroundColor: "#fff",
  },
  signIn: {
    color: "#2962ff",
  },
});
