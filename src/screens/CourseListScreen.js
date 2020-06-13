import React from "react";
import { View, FlatList } from "react-native";
import _l from "../lib/i18n";
import CourseListItem from "../components/CourseListItem";
import topic from "../../data/topic";

export default class CourseListScreen extends React.Component {
  render() {
    var courseList = topic[0].course;
    return (
      <View style={{ backgroundColor: "#fff" }}>
        <FlatList
          data={courseList}
          renderItem={({ item }) => <CourseListItem title={item.courseName} />}
          keyExtractor={(item, index) => item.key}
        />
      </View>
    );
  }
}
