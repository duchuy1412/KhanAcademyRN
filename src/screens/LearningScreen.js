import React, { Component } from "react";
import { connect } from "react-redux";
import { View, StyleSheet, ToastAndroid } from "react-native";
import { Video } from "expo-av";
import { Colors, Text, Title, Caption, Divider } from "react-native-paper";
import { MaterialIcons } from "@expo/vector-icons";
import { ScrollView } from "react-native-gesture-handler";

export class LearningScreen extends Component {
  render() {
    const { navigation, route } = this.props;
    const { learningItem } = route.params;
    navigation.setOptions({
      title: learningItem.name,
      headerRight: () => (
        <MaterialIcons
          name="bookmark-border"
          size={30}
          color={Colors.grey400}
          onPress={() => {
            ToastAndroid.show("Saved into Bookmarks!", ToastAndroid.SHORT);
          }}
        />
      ),
      headerRightContainerStyle: {
        padding: 10,
      },
    });
    return (
      <View bac>
        <View>
          <Video
            source={{
              uri:
                "https://www.learningcontainer.com/wp-content/uploads/2020/05/sample-mp4-file.mp4",
            }}
            rate={1.0}
            volume={1.0}
            isMuted={false}
            resizeMode="cover"
            shouldPlay
            isLooping
            useNativeControls={true}
            style={{ width: "100%", height: 200 }}
          />
        </View>
        <ScrollView>
          <Title style={styles.title}>{learningItem.name}</Title>
          <Divider />
          <View style={styles.iconRow}>
            <View style={styles.icon}>
              <MaterialIcons
                name="bookmark-border"
                size={30}
                color={Colors.grey400}
                onPress={() => {
                  ToastAndroid.show("Saved to Bookmarks!", ToastAndroid.SHORT);
                }}
              />
              <Text style={styles.caption}>Bookmark</Text>
            </View>
            <View style={styles.icon}>
              <MaterialIcons name="share" size={30} color={Colors.grey400} />
              <Text style={styles.caption}>Share</Text>
            </View>
            <View style={styles.icon}>
              <MaterialIcons
                name="description"
                size={30}
                color={Colors.grey400}
              />
              <Text style={styles.caption}>Transcript</Text>
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(LearningScreen);

const styles = StyleSheet.create({
  title: {
    padding: 12,
    backgroundColor: "#fff",
    marginBottom: 0,
  },
  iconRow: {
    backgroundColor: "#fff",
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 4,
    borderBottomWidth: 0.5,
    borderBottomColor: Colors.grey400,
  },
  icon: {
    justifyContent: "center",
    alignItems: "center",
  },
  caption: {
    marginTop: 0,
    color: Colors.grey400,
  },
});
