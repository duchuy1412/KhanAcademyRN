import React, { Component } from "react";
import { View, StyleSheet, Alert, ToastAndroid } from "react-native";
import { Button, Colors, Caption, TextInput, Text } from "react-native-paper";
import _l from "../lib/i18n";
import firebase from "../lib/firebase";
import * as Facebook from "expo-facebook";
import * as GoogleSignIn from "expo-google-sign-in";
import { connect } from "react-redux";
import * as AuthActions from "../actions/authActions";
const EMAIL_REGEX = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;

// import { GoogleSignIn } from "expo-google-sign-in";
export class SignIn extends Component {
  constructor(props) {
    super(props);

    this.state = {
      disableSignIn: true,
      email: "",
      password: "",
    };
  }

  handleSignInGoogle = async () => {
    try {
      await GoogleSignIn.askForPlayServicesAsync();

      const { type, user } = await GoogleSignIn.signInAsync();
      const data = await GoogleSignIn.GoogleAuthentication.prototype.toJSON();
      if (type === "success") {
        await firebase
          .auth()
          .setPersistence(firebase.auth.Auth.Persistence.LOCAL);
        const credential = firebase.auth.GoogleAuthProvider.credential(
          data.idToken,
          data,
          accessToken
        );
        const googleProfileData = await firebase
          .auth()
          .signInWithCredential(credential);

        alert("Success", googleProfileData);
      }
    } catch ({ message }) {
      alert("login error:" + message);
    }
  };
  handleSignInFacebook = async () => {
    try {
      // APP_ID
      await Facebook.initializeAsync("1186124071747489");
      const { type, token } = await Facebook.logInWithReadPermissionsAsync({
        permissions: ["public_profile"],
      });
      if (type === "success") {
        await firebase
          .auth()
          .setPersistence(firebase.auth.Auth.Persistence.LOCAL);
        const credential = firebase.auth.FacebookAuthProvider.credential(token);
        const facebookProfileData = await firebase
          .auth()
          .signInWithCredential(credential);
        alert("Success FB", facebookProfileData);
      }
    } catch ({ message }) {
      alert(`Facebook Login Error: ${message}`);
    }
  };

  handleOnPressSignIn = () => {
    console.log(this.state.email + " " + this.state.password);
    if (this.validateInput()) {
      const { email, password } = this.state;
      firebase
        .auth()
        .signInWithEmailAndPassword(email, password)
        .then(() => {
          let currentUser = firebase.auth().currentUser;

          if (currentUser.uid) {
            this.props.dispatch(AuthActions.handleSignIn(currentUser));
          }
          ToastAndroid.show("Sign in success.", ToastAndroid.SHORT);
          this.props.navigation.navigate("Settings");
        })
        .catch((e) => {
          Alert.alert("Error", e.message);
        });
    }
  };
  _onChangeEmail = (text) => {
    this.setState({ email: text, errorEmail: false });
  };
  _onChangePassword = (text) => {
    this.setState({ password: text, errorPassword: false });
  };
  validateInput = () => {
    const { email, password } = this.state;
    if (email && password && EMAIL_REGEX.test(email)) {
      return true;
    }
    Alert.alert("Error", _l.t("Email or password is incorrect"));
    return false;
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
            value={this.state.email}
            onChangeText={this._onChangeEmail}
          ></TextInput>
          <TextInput
            label={_l.t("Password")}
            style={styles.textInput}
            mode="outlined"
            textContentType="newPassword"
            placeholder={_l.t("Password")}
            secureTextEntry={true}
            value={this.state.password}
            onChangeText={this._onChangePassword}
          ></TextInput>
        </View>

        <Button
          mode="contained"
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

export default connect()(SignIn);

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
