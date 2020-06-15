import React from "react";
import { View, FlatList } from "react-native";
import _l from "../lib/i18n";
import CourseListItem from "../components/CourseListItem";
import topic from "../../data/topic";
import InfiniteListRow from "../components/List/InfiniteListRow";
import { Divider } from "react-native-paper";

export default class CourseListScreen extends React.Component {
  render() {
    var courseList = topic[0].course;
    return (
      <View style={{ backgroundColor: "#fff" }}>
        <FlatList
          data={courseList}
          ItemSeparatorComponent={() => <Divider inset={true} />}
          renderItem={(item) => (
            <InfiniteListRow
              data={item}
              key={item.key}
              inset={true}
              onPressItem={() => {
                // go to recent lessons
                // this.props.navigation.navigate("CourseList");
                console.log("Hello");
              }}
            />
          )}
          keyExtractor={(item, index) => item.key}
        />
      </View>
    );
  }
}
