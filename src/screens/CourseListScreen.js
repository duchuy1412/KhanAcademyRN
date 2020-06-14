import React from "react";
import { View, FlatList } from "react-native";
import _l from "../lib/i18n";
import CourseListItem from "../components/CourseListItem";
import topic from "../../data/topic";

export default class CourseListScreen extends React.Component {
  render() {
    const { navigation, route } = this.props;
    const { topicName } = route.params;

    //Update header title
    navigation.setOptions({
      title: topicName,
    });

    var courseList = topic[0].course;

    return (
      <View style={{ flex: 1, backgroundColor: "#fff" }}>
        <FlatList
          overScrollMode="always"
          data={courseList}
          renderItem={({ item }) => (
            <CourseListItem title={item.courseName} icon={item.icon} />
          )}
          keyExtractor={(item, index) => item.key}
        />
      </View>
    );
  }
}
