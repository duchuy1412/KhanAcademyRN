import React, { Component } from "react";
import { View, StyleSheet } from "react-native";
import _l from "../lib/i18n";
import { TextInput, Text, Button, Colors } from "react-native-paper";
import { ScrollView } from "react-native-gesture-handler";

export class SignUpScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      errorEmail: false,
      errorFirstName: false,
      errorLastName: false,
      errorPassword: false,
      errorCfPassword: false,
      disableSignUp: true,
    };
  }

  handlePressCreateAccount = () => {};
  render() {
    let {
      errorEmail,
      errorFirstName,
      errorLastName,
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
            label={_l.t("First name")}
            mode="outlined"
            textContentType="givenName"
            placeholder={_l.t("First name")}
            error={this.state.errorFirstName}
          ></TextInput>
          {/* {errorEmail && (
            <Text style={styles.errorLabel}>First name is required</Text>
          )} */}
          <TextInput
            keyboardType="default"
            style={styles.textInput}
            label={_l.t("Last name")}
            mode="outlined"
            textContentType="familyName"
            placeholder={_l.t("Last name")}
            error={this.state.errorLastName}
          ></TextInput>
          {/* {errorLastName && <Text>Last name is required</Text>} */}
          <TextInput
            keyboardType="email-address"
            style={styles.textInput}
            label="Email"
            mode="outlined"
            textContentType="emailAddress"
            placeholder={_l.t("Enter an email address")}
            error={this.state.errorEmail}
          ></TextInput>
          {/* {errorEmail && <Text>Email is invalid</Text>} */}
          <TextInput
            label={_l.t("Password")}
            style={styles.textInput}
            mode="outlined"
            textContentType="newPassword"
            placeholder={_l.t("Password")}
            secureTextEntry={true}
            error={this.state.errorPassword}
          ></TextInput>
          {/* {errorPassword && <Text>Password is invalid</Text>} */}
          <TextInput
            label={_l.t("Confirm Password")}
            style={styles.textInput}
            mode="outlined"
            textContentType="password"
            placeholder={_l.t("Confirm Password")}
            secureTextEntry={true}
            error={this.state.errorCfPassword}
          ></TextInput>
          {/* {errorCfPassword && <Text>Confirm password is invalid</Text>} */}
          <Button
            mode="contained"
            disabled={this.state.disableSignUp}
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

export default SignUpScreen;

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
