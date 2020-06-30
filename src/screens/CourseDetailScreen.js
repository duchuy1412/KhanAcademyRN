import React from "react";
import { View, FlatList } from "react-native";
import _l from "../lib/i18n";
import LessonRow from "../components/List/LessonRow";
import ProgressingRow from "../components/List/ProgressingRow";
import { Divider } from "react-native-paper";
import { connect } from "react-redux";
import { fetchLessons } from "../actions/lessonActions";
import CustomSpinner from "../components/CustomSpinner";

class CourseDetailScreen extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const { topicIndex, courseIndex, lessons } = this.props.route.params;
    this.props.dispatch(fetchLessons(lessons));
  }

  getMaxMasteryPoints = (lessons) => {
    let maxPoints = 0;
    if (lessons != null)
      lessons.forEach((lesson) => {
        maxPoints += lesson.points;
      });
    return maxPoints;
  };

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
        <CustomSpinner visible={loading} />

        <FlatList
          showsVerticalScrollIndicator={false}
          data={lessons}
          ListHeaderComponent={() => (
            <ProgressingRow
              currentPoints={0} // Pass current point of course here
              maxPoints={this.getMaxMasteryPoints(lessons)}
              style={{ marginBottom: 0 }}
            />
          )}
          ListHeaderComponentStyle={{ marginBottom: 16 }}
          renderItem={({ item, index }) => {
            return (
              <View
                style={{
                  paddingBottom: 16,
                }}
              >
                <LessonRow
                  title={item.name}
                  icon={item.icon}
                  upNext={false}
                  points={0} // Pass current point of lesson here
                  maxPoints={lessons[index].points}
                  units={item.units}
                  onPressItem={() => {
                    navigation.push("Lesson", {
                      lessonName: item.name,
                      lessonPoints: lessons[index].points,
                      units: item.units,
                    });
                  }}
                />
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
