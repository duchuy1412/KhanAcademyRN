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
      email: "",
      password: "",
    };
  }

  handleSignInFacebook = () => {};
  handleSignInGoogle = () => {};
  handleOnPressSignIn = () => {};
  _onChangeEmail = (e) => {
    this.setState({ email: e.target.value });
  };
  _onChangePassword = (e) => {
    this.setState({ password: e.target.value });
  };
  render() {
    return (
      <View style={styles.container}>
        <Button
          icon="google"
          mode="contained"
          uppercase={false}
          contentStyle={{ margin: 8 }}
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
          contentStyle={{ margin: 8 }}
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
            value={this.state.email}
            onChange={this._onChangeEmail}
          ></TextInput>
          <TextInput
            label={_l.t("Password")}
            style={styles.textInput}
            mode="outlined"
            textContentType="newPassword"
            placeholder={_l.t("Password")}
            secureTextEntry={true}
            error={this.state.errorPassword}
            value={this.state.password}
            onChange={this._onChangePassword}
          ></TextInput>
        </View>

        <Button
          mode="contained"
          disabled={this.state.disableSignIn}
          uppercase={false}
          contentStyle={{ margin: 8 }}
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
