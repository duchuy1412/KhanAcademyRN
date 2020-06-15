import React from "react";
import { View, StyleSheet } from "react-native";
import { List, Divider } from "react-native-paper";
import _l from "../lib/i18n";
export default class SettingScreen extends React.Component {
  render() {
    const { navigation } = this.props;
    return (
      <View style={{ flex: 1 }}>
        <List.Section>
          <List.Item
            style={styles.listItem}
            title={_l.t("Sign in")}
            titleStyle={styles.signIn}
            onPress={() => navigation.navigate("Welcome")}
          />
        </List.Section>

        <List.Section>
          <List.Item
            style={styles.listItem}
            title={_l.t("Language & Regions")}
          />
          <Divider />
          <List.Item
            style={styles.listItem}
            title={_l.t("Download settings")}
          />
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
