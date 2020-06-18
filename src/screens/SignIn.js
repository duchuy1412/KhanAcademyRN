import React, { Component } from "react";
import { View, StyleSheet } from "react-native";
import { Button, Colors, Caption, TextInput } from "react-native-paper";
import _l from "../lib/i18n";

export class SignIn extends Component {
  constructor(props) {
    super(props);

    this.state = {
      disableSignIn: true,
      errorEmail: false,
      errorPassword: false,
    };
  }

  handleSignInFacebook = () => {};
  handleSignInGoogle = () => {};
  handleOnPressSignIn = () => {};
  render() {
    return (
      <View style={styles.container}>
        <Button
          icon="google"
          mode="contained"
          uppercase={false}
          style={styles.button}
          color={Colors.red900}
          onPress={this.handleSignInGoogle}
        >
          {_l.t("Continue with Google")}
        </Button>
        <Button
          icon="facebook"
          mode="contained"
          uppercase={false}
          style={styles.button}
          color={Colors.blue900}
          onPress={this.handleSignInFacebook}
        >
          {_l.t("Continue with Facebook")}
        </Button>
        <Caption>{_l.t("OR")}</Caption>
        <View style={{ width: "100%" }}>
          <TextInput
            keyboardType="email-address"
            style={styles.textInput}
            label="Email"
            mode="outlined"
            textContentType="emailAddress"
            placeholder={_l.t("Enter an email address")}
            error={this.state.errorEmail}
          ></TextInput>
          <TextInput
            label={_l.t("Password")}
            style={styles.textInput}
            mode="outlined"
            textContentType="newPassword"
            placeholder={_l.t("Password")}
            secureTextEntry={true}
            error={this.state.errorPassword}
          ></TextInput>
        </View>

        <Button
          mode="contained"
          disabled={this.state.disableSignIn}
          uppercase={false}
          style={[styles.button, { marginTop: 14 }]}
          onPress={this.handleOnPressSignIn}
        >
          {_l.t("Sign in")}
        </Button>
      </View>
    );
  }
}

export default SignIn;

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
    marginBottom: 16,
    fontSize: 14,
  },
  textInput: {
    width: "100%",
    backgroundColor: "#fff",
    borderRadius: 4,
    fontSize: 14,
  },
});
