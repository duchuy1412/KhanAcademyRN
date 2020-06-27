import React from "react";
import { View, Text, ToastAndroid } from "react-native";
import _l from "../lib/i18n";
import { List, Divider, Button, Colors } from "react-native-paper";
import { WebView } from "react-native-webview";

class PracticeScreen extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {}

  render() {
    const { navigation } = this.props;
    navigation.setOptions({ tabBarVisible: false });
    return (
      <View>
        <WebView
          scrollEnabled={false}
          containerStyle={{ flex: 0, height: "92%" }}
          source={{
            uri:
              "http://khan.github.io/perseus/?renderer#content=%7B%22question%22%3A%7B%22content%22%3A%22%5B%5B%E2%98%83%20expression%201%5D%5D%20%2B%202%20%3D%203%22%2C%22images%22%3A%7B%7D%2C%22widgets%22%3A%7B%22expression%201%22%3A%7B%22type%22%3A%22expression%22%2C%22alignment%22%3A%22default%22%2C%22static%22%3Afalse%2C%22graded%22%3Atrue%2C%22options%22%3A%7B%22answerForms%22%3A%5B%7B%22value%22%3A%222%22%2C%22form%22%3Afalse%2C%22simplify%22%3Afalse%2C%22considered%22%3A%22correct%22%2C%22key%22%3A0%7D%2C%7B%22value%22%3A%223%22%2C%22form%22%3Afalse%2C%22simplify%22%3Afalse%2C%22considered%22%3A%22wrong%22%2C%22key%22%3A1%7D%2C%7B%22value%22%3A%224%22%2C%22form%22%3Afalse%2C%22simplify%22%3Afalse%2C%22considered%22%3A%22wrong%22%2C%22key%22%3A2%7D%5D%2C%22buttonSets%22%3A%5B%22basic%22%5D%2C%22functions%22%3A%5B%22f%22%2C%22g%22%2C%22h%22%5D%2C%22times%22%3Afalse%7D%2C%22version%22%3A%7B%22major%22%3A1%2C%22minor%22%3A0%7D%7D%7D%7D%2C%22answerArea%22%3A%7B%22calculator%22%3Afalse%2C%22chi2Table%22%3Afalse%2C%22periodicTable%22%3Afalse%2C%22tTable%22%3Afalse%2C%22zTable%22%3Afalse%7D%2C%22itemDataVersion%22%3A%7B%22major%22%3A0%2C%22minor%22%3A1%7D%2C%22hints%22%3A%5B%5D%7D",
          }}
        />
        <Divider />
        <View
          style={{
            justifyContent: "center",
            height: "8%",
            backgroundColor: "#fff",
          }}
        >
          <List.Item
            left={(props) => <List.Icon {...props} icon="folder" />}
            right={(props) => (
              <View
                style={{
                  flex: 1,
                  justifyContent: "center",
                }}
              >
                <Button
                  color={Colors.blue500}
                  mode="contained"
                  onPress={() => console.log("Pressed")}
                >
                  Check
                </Button>
              </View>
            )}
          />
        </View>
      </View>
    );
  }
}

export default PracticeScreen;
