import React from "react";
import { View, StyleSheet, Alert, ToastAndroid } from "react-native";
import { Colors, Button, Text, Caption } from "react-native-paper";
import _l from "../lib/i18n";
import { connect } from "react-redux";
import * as Facebook from "expo-facebook";
import * as GoogleSignIn from "expo-google-sign-in";
import firebase from "../lib/firebase";
import * as AuthActions from "../actions/authActions";

export class SettingScreen extends React.Component {
  handlePressSignUpEmail = () => {
    const { navigation } = this.props;
    navigation.navigate("Sign up");
  };
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
          data.accessToken
        );
        const googleProfileData = await firebase
          .auth()
          .signInWithCredential(credential)
          .then(() => {
            let currentUser = firebase.auth().currentUser;

            if (currentUser.uid) {
              this.props.dispatch(AuthActions.handleSignIn(currentUser));
            }
            ToastAndroid.show("Sign in successfully", ToastAndroid.SHORT);
            this.props.navigation.navigate("TabNavigator");
          })
          .catch((e) => {
            Alert.alert("Error", e.message);
          });

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
        permissions: ["public_profile", "email"],
      });
      if (type === "success") {
        await firebase
          .auth()
          .setPersistence(firebase.auth.Auth.Persistence.LOCAL);
        const credential = firebase.auth.FacebookAuthProvider.credential(token);
        const facebookProfileData = await firebase
          .auth()
          .signInWithCredential(credential)
          .then(() => {
            let currentUser = firebase.auth().currentUser;

            if (currentUser.uid) {
              this.props.dispatch(AuthActions.handleSignIn(currentUser));
            }
            ToastAndroid.show("Sign in successfully", ToastAndroid.SHORT);
            this.props.navigation.navigate("TabNavigator");
          })
          .catch((e) => {
            Alert.alert("Error", e.message);
          });
      }
    } catch ({ message }) {
      alert(`Facebook Login Error: ${message}`);
    }
  };
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
        <Button
          icon="email"
          mode="contained"
          contentStyle={{ margin: 8 }}
          uppercase={false}
          style={styles.button}
          onPress={this.handlePressSignUpEmail}
        >
          {_l.t("Sign up with email")}
        </Button>
        <Caption style={styles.caption}>{_l.t("Already a user?")}</Caption>
        <Button
          mode="outlined"
          uppercase={false}
          contentStyle={{ margin: 8 }}
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

const mapStateToProps = (state) => ({});
export default connect(mapStateToProps)(SettingScreen);
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
