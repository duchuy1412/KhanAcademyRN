import React from "react";
import { View, StyleSheet } from "react-native";
import { Colors, Button, Text, Caption } from "react-native-paper";
import _l from "../lib/i18n";
export default class SettingScreen extends React.Component {
  
  render() {
    const { navigation } = this.props;

    return (
      <View style={styles.container} theme={{ roundness: 3 }}>
        <Text style={styles.title}>{_l.t("titleWelcome1")}</Text>
        <Caption style={styles.caption}>{_l.t("titleWelcome2")}</Caption>
        <Button
          icon="google"
          mode="contained"
          uppercase={false}
          style={styles.button}
          color={Colors.red900}
        >
          {_l.t("Continue with Google")}
        </Button>
        <Button
          icon="facebook"
          mode="contained"
          uppercase={false}
          style={styles.button}
          color={Colors.blue900}
        >
          {_l.t("Continue with Facebook")}
        </Button>
        <Button
          icon="email"
          mode="contained"
          uppercase={false}
          style={styles.button}
        >
          {_l.t("Sign up with email")}
        </Button>
        <Caption style={styles.caption}>{_l.t("Already a user?")}</Caption>
        <Button
          mode="outlined"
          uppercase={false}
          style={styles.button}
          onPress={() => {
            navigation.navigate("Sign in");
          }}
        >
          {_l.t("Sign in")}
        </Button>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    textAlign: "center",
    padding: 16,
  },
  button: {
    width: "100%",
    marginBottom: 12,
    paddingBottom: 8,
    paddingTop: 8,
    borderRadius: 4,
  },
  caption: {
    textAlign: "center",
    marginBottom: 12,
    fontSize: 14,
  },
  title: {
    textAlign: "center",
    fontSize: 24,
    fontWeight: "200",
    marginBottom: 16,
  },
});
