import React, { Component } from "react";
import { View, StyleSheet, ToastAndroid, Alert } from "react-native";
import _l from "../lib/i18n";
import { TextInput, Text, Button, Colors } from "react-native-paper";
import { ScrollView } from "react-native-gesture-handler";
import firebase from "../lib/firebase";
import { connect } from "react-redux";
import * as AuthActions from "../actions/authActions";
export class SignUpScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      errorFullname: false,
      errorEmail: false,
      errorPassword: false,
      errorCfPassword: false,
      disableSignUp: true,

      fullname: "",
      email: "",
      password: "",
      cfPassword: "",
    };
  }

  handlePressCreateAccount = () => {
    const { fullname, email, password, cfPassword } = this.state;
    if (this.validateInput()) {
      firebase
        .auth()
        .createUserWithEmailAndPassword(email, password)
        .then(() => {
          let currentUser = firebase.auth().currentUser;

          if (currentUser.uid) {
            this.props.dispatch(AuthActions.handleSignIn(currentUser));
          }
          ToastAndroid.show(
            "Create new account successfully",
            ToastAndroid.SHORT
          );
          this.props.navigation.navigate("Settings");
        })
        .catch((e) => {
          Alert.alert("Error", e.message);
        });
    }
  };

  validateInput = () => {
    const { fullname, email, password, cfPassword } = this.state;
    if (
      fullname &&
      email &&
      password &&
      cfPassword &&
      password === cfPassword
    ) {
      return true;
    }
    return false;
  };
  _onChangeFirst;
  render() {
    let {
      errorEmail,
      errorFullname,
      errorPassword,
      errorCfPassword,
    } = this.state;
    return (
      <View style={styles.container}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Text style={styles.caption}>{_l.t("titleSignUp")}</Text>
          <TextInput
            keyboardType="default"
            style={styles.textInput}
            label={_l.t("Full name")}
            mode="outlined"
            textContentType="givenName"
            placeholder={_l.t("Full name")}
            error={errorFullname}
            onChangeText={(text) => {
              this.setState({ fullname: text });
            }}
            value={this.state.fullname}
          ></TextInput>
          {errorFullname && <Text>Last name is required</Text>}
          <TextInput
            keyboardType="email-address"
            style={styles.textInput}
            label="Email"
            mode="outlined"
            textContentType="emailAddress"
            placeholder={_l.t("Enter an email address")}
            error={errorEmail}
            value={this.state.email}
            onChangeText={(text) => {
              this.setState({ email: text });
            }}
          ></TextInput>
          {errorEmail && <Text>Email is invalid</Text>}
          <TextInput
            label={_l.t("Password")}
            style={styles.textInput}
            mode="outlined"
            textContentType="newPassword"
            placeholder={_l.t("Password")}
            secureTextEntry={true}
            error={errorPassword}
            value={this.state.password}
            onChangeText={(text) => {
              this.setState({ password: text });
            }}
          ></TextInput>
          {errorPassword && <Text>Password is invalid</Text>}
          <TextInput
            label={_l.t("Confirm Password")}
            style={styles.textInput}
            mode="outlined"
            textContentType="password"
            placeholder={_l.t("Confirm Password")}
            secureTextEntry={true}
            error={errorCfPassword}
            value={this.state.cfPassword}
            onChangeText={(text) => {
              this.setState({ cfPassword: text });
            }}
          ></TextInput>
          {errorCfPassword && <Text>Confirm password is invalid</Text>}
          <Button
            mode="contained"
            uppercase={false}
            contentStyle={{ margin: 8 }}
            style={[styles.button, { marginTop: 14 }]}
            onPress={this.handlePressCreateAccount}
          >
            {_l.t("Create new account")}
          </Button>
        </ScrollView>
      </View>
    );
  }
}
const mapStateToProps = (state) => ({});

export default connect(mapStateToProps)(SignUpScreen);

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
    fontSize: 18,
  },
  textInput: {
    width: "100%",
    backgroundColor: "#fff",
    borderRadius: 4,
    fontSize: 14,
    marginBottom: 8,
  },
});
