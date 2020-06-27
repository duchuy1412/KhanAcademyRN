import React, { Component } from "react";
import { connect } from "react-redux";
import {
  View,
  StyleSheet,
  ToastAndroid,
  Image,
  SafeAreaView,
} from "react-native";
import { Video } from "expo-av";
import { Colors, Text, Title, Divider, List } from "react-native-paper";
import { MaterialIcons } from "@expo/vector-icons";
import { ScrollView, FlatList } from "react-native-gesture-handler";
import _l from "../lib/i18n";
import { Feather } from "@expo/vector-icons";
import { LessonUnitRow } from "../components/LessonUnit/LessonUnitRow";

export class LearningScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      bookmarked: false,
      learn: [],
      practice: [],
      currentUnit: {},
    };
  }

  componentDidMount() {
    const { navigation, route } = this.props;
    const { learningItem, unit } = route.params;
    console.log("-----UNIT-->", unit);
    this.setState({
      learn: unit["learn"],
      practice: unit["practice"],
      currentUnit: learningItem,
      unit: unit,
    });
  }
  handlePressUnitItem(item) {
    return () => {
      this.setState({ currentUnit: item });
    };
  }
  gotoPractice(item) {
    return () => alert("Practice");
  }
  render() {
    const { navigation, route } = this.props;
    const { learningItem, unit } = route.params;
    let { currentUnit } = this.state;

    navigation.setOptions({
      title: currentUnit.name,
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
      <View>
        <Video
          source={{
            uri: currentUnit.video,
          }}
          rate={1.0}
          volume={1.0}
          isMuted={false}
          resizeMode="contain"
          shouldPlay={false}
          isLooping
          useNativeControls={true}
          style={{ width: "100%", height: "35%" }}
        />
        <SafeAreaView style={{ height: "64%" }}>
          <ScrollView>
            <View style={[styles.title]}>
              <Title style={{ marginTop: 0 }}>{currentUnit.name}</Title>
              <Text style={{ marginLeft: 2 }}>{currentUnit.description}</Text>
            </View>
            <View style={styles.iconRow}>
              <View style={styles.icon}>
                <MaterialIcons
                  name="bookmark-border"
                  size={30}
                  color={Colors.grey400}
                  onPress={() => {
                    ToastAndroid.show(
                      "Saved to Bookmarks!",
                      ToastAndroid.SHORT
                    );
                  }}
                />
                <Text style={styles.caption}>{_l.t("Bookmarks")}</Text>
              </View>
              <View style={styles.icon}>
                <MaterialIcons name="share" size={30} color={Colors.grey400} />
                <Text style={styles.caption}>{_l.t("Share")}</Text>
              </View>
              <View style={styles.icon}>
                <MaterialIcons
                  name="description"
                  size={30}
                  color={Colors.grey400}
                />
                <Text style={styles.caption}>{_l.t("Transcript")}</Text>
              </View>
            </View>

            <Title style={styles.title}> {_l.t("Up next")}</Title>
            <List.Item
              style={styles.partOfLesson}
              title={_l.t("Part of lesson")}
              titleStyle={{ fontSize: 14 }}
              description={unit.name}
              descriptionStyle={{
                fontSize: 18,
                fontWeight: "bold",
                color: "black",
              }}
              left={() => (
                <Image
                  style={{
                    borderRadius: 45,
                    height: 50,
                    width: 50,
                    marginLeft: 8,
                  }}
                  source={
                    unit.icon
                      ? {
                          uri: unit.icon,
                        }
                      : {
                          uri:
                            "https://cdn.kastatic.org/genfiles/topic-icons/icons/early_math.png-314b80-128c.png",
                        }
                  }
                />
              )}
              right={() => (
                <View
                  style={{
                    alignItems: "center",
                    flexDirection: "row",
                  }}
                >
                  <Feather
                    name="chevron-right"
                    size={24}
                    color={Colors.grey400}
                  />
                </View>
              )}
            />
            <View>
              <Divider />
              <FlatList
                data={this.state.learn}
                renderItem={({ item }) => (
                  <LessonUnitRow
                    data={item}
                    type="learn"
                    active={item.key === currentUnit.key}
                    onPressItem={this.handlePressUnitItem(item)}
                  ></LessonUnitRow>
                )}
                ItemSeparatorComponent={() => <Divider inset={false} />}
              ></FlatList>
              <Divider />
              <FlatList
                data={this.state.practice}
                renderItem={({ item }) => (
                  <LessonUnitRow
                    data={item}
                    type="practice"
                    onPressItem={this.gotoPractice(item)}
                  ></LessonUnitRow>
                )}
                ItemSeparatorComponent={() => <Divider inset={false} />}
              ></FlatList>
            </View>
          </ScrollView>
        </SafeAreaView>
      </View>
    );
  }
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(LearningScreen);

const styles = StyleSheet.create({
  partOfLesson: {
    backgroundColor: "#fff",
    alignItems: "center",
  },
  title: {
    padding: 12,
    backgroundColor: "#fff",
    marginBottom: 0,
    borderBottomWidth: 0.5,
    borderTopWidth: 0.5,
    borderColor: Colors.grey400,
  },
  iconRow: {
    backgroundColor: "#fff",
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 4,
    borderBottomWidth: 0.5,
    borderBottomColor: Colors.grey400,
    marginBottom: 16,
  },
  icon: {
    justifyContent: "center",
    alignItems: "center",
  },
  caption: {
    marginTop: 0,
    color: Colors.grey400,
  },
  subHeader: {
    fontWeight: "bold",
    color: "black",
    fontSize: 16,
  },
});
