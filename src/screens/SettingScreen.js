import React from "react";
import { View, StyleSheet, Alert, ToastAndroid } from "react-native";
import { List, Divider, Colors } from "react-native-paper";
import _l from "../lib/i18n";
import { connect } from "react-redux";
import firebase from "../lib/firebase";
import * as AuthActions from "../actions/authActions";
import cx from "react-native-classnames";
export class SettingScreen extends React.Component {
  // componentDidMount() {
  //   let currentUser = firebase.auth().currentUser;
  //   if (currentUser) {
  //     this.setState({ user: currentUser, signedIn: true });
  //   } else {
  //     this.setState({ signedIn: false });
  //   }
  // }

  handleSignOut = () => {
    firebase
      .auth()
      .signOut()
      .then(() => {
        this.props.dispatch(AuthActions.handleSignOut());
        ToastAndroid.show("Sign out success", ToastAndroid.SHORT);
      })
      .catch((e) => {
        Alert.alert("Error", e.message);
      });
  };
  render() {
    const { navigation, user, signedIn } = this.props;

    return (
      <View style={{ flex: 1 }}>
        {!signedIn ? (
          <List.Section>
            <List.Item
              style={styles.listItem}
              title={_l.t("Sign in")}
              titleStyle={styles.signIn}
              onPress={() => navigation.navigate("Welcome")}
            />
          </List.Section>
        ) : (
          <List.Section>
            <List.Item
              style={styles.listItem}
              title={_l.t("Sign out")}
              titleStyle={styles.signOut}
              onPress={this.handleSignOut}
            />
          </List.Section>
        )}

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

const mapStateToProps = (state) => ({
  user: state.authReducer.user,
  signedIn: state.authReducer.signedIn,
});
export default connect(mapStateToProps)(SettingScreen);
const styles = StyleSheet.create({
  listItem: {
    backgroundColor: "#fff",
  },
  signIn: {
    color: "#2962ff",
  },
  signOut: {
    color: "red",
  },
});
