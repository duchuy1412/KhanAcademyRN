import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import { List } from "react-native-paper";
import { Feather } from "@expo/vector-icons";
import { Colors } from "react-native-paper";
import { color } from "react-native-reanimated";

export class LessonUnitRow extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    const { active = false, data, type, onPressItem } = this.props;
    if (type === "learn") {
      return (
        <View style={[styles.title, active && { paddingLeft: 2 }]}>
          <List.Item
            onPress={onPressItem}
            style={[
              styles.partOfLesson,
              active && { borderLeftWidth: 4, borderLeftColor: Colors.blue500 },
            ]}
            title={data.name}
            titleStyle={
              active ? { color: Colors.blue500, fontWeight: "bold" } : {}
            }
            left={() => (
              <Feather
                name="play-circle"
                size={30}
                color={active ? Colors.blue500 : Colors.grey400}
              />
            )}
            right={() => (
              <View
                style={{
                  alignItems: "center",
                  flexDirection: "row",
                }}
              >
                <Text
                  style={
                    active
                      ? { color: Colors.blue500, fontWeight: "bold" }
                      : { color: Colors.grey400, fontWeight: "bold" }
                  }
                >
                  {data.videoDuration}
                </Text>
              </View>
            )}
          />
        </View>
      );
    }
    return (
      <View style={styles.title}>
        <List.Item
          onPress={onPressItem}
          style={styles.partOfLesson}
          title={data.name}
          titleStyle={{}}
          left={() => <Feather name="edit" size={30} color={Colors.grey400} />}
        />
      </View>
    );
  }
}

export default LessonUnitRow;

const styles = StyleSheet.create({
  partOfLesson: {
    backgroundColor: "#fff",
    alignItems: "center",
  },
  title: {
    paddingLeft: 6,
    paddingRight: 6,
    backgroundColor: "#fff",
  },
});
