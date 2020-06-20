import React from "react";
import { View, FlatList, StatusBar } from "react-native";
import _l from "../lib/i18n";
import LessonRow from "../components/List/LessonRow";
import ProgressingRow from "../components/List/ProgressingRow";
import { Divider, List } from "react-native-paper";
import { connect } from "react-redux";
import { fetchLessons } from "../actions/lessonActions";
import { ActivityIndicator, Colors } from "react-native-paper";
import CustomSpinner from "../components/CustomSpinner";

class CourseDetailScreen extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const { topicIndex, courseIndex } = this.props.route.params;
    this.props.dispatch(fetchLessons(topicIndex, courseIndex));
  }

  render() {
    const { error, loading, lessons } = this.props;
    const { navigation, route } = this.props;
    const { courseName, topicName } = route.params;
    // console.log("Topic Name: " + topicName);
    // console.log("Course Name: " + courseName);

    //Update header title
    navigation.setOptions({
      title: courseName,
    });

    return (
      <View style={{ flex: 1 }}>
        {/* <StatusBar backgroundColor="#000" /> */}
        <CustomSpinner visible={loading} />

        <FlatList
          showsVerticalScrollIndicator={false}
          data={lessons}
          ListHeaderComponent={() => <ProgressingRow title="900/1000" />}
          ListHeaderComponentStyle={{ marginBottom: 20 }}
          ItemSeparatorComponent={() => <Divider />}
          renderItem={({ item }) => {
            return (
              <View style={{ paddingBottom: 20 }}>
                <LessonRow title={item.name} icon={item.icon} upNext={false} />
              </View>
            );
          }}
          keyExtractor={(item, index) => item.key}
        />
      </View>
    );
  }
}

const mapStateToProps = (state) => ({
  lessons: state.lessonReducer.items,
  loading: state.lessonReducer.loading,
  error: state.lessonReducer.error,
});

export default connect(mapStateToProps)(CourseDetailScreen);
