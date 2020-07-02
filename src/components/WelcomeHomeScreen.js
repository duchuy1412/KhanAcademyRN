import React from "react";
import { View, Image, StyleSheet } from "react-native";
import welcomeImg from "../assets/welcome.png";
import { Title, Button, Text } from "react-native-paper";
import _l from "../lib/i18n";
function WelcomeHomeScreen(props) {
  return (
    <View style={styles.container}>
      <Image
        source={welcomeImg}
        style={{ width: "100%", height: 200 }}
        resizeMode="contain"
      />
      <Title style={{ textAlign: "center" }}>Ready to start learning?</Title>
      <Text style={{ textAlign: "center", fontSize: 14 }}>
        Khan Academy offers thousands of interactive practice exercises and
        in-depth videos.
      </Text>
      <Button
        mode="contained"
        uppercase={false}
        style={{ width: "50%", marginTop: 15 }}
        onPress={() => {
          props.navigation.navigate("Welcome");
        }}
      >
        {_l.t("Sign in")}
      </Button>
    </View>
  );
}

export default WelcomeHomeScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    marginTop: 10,
    padding: 12,
    paddingBottom: 16,
    alignItems: "center",
    marginBottom: 8,
    borderColor: "lightgrey",
    borderBottomWidth: 1,
    borderTopWidth: 1,
  },
});
