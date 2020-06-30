import React from "react";
import { View, ToastAndroid } from "react-native";
import _l from "../lib/i18n";
import { Divider, List, Colors, ProgressBar } from "react-native-paper";
import { connect } from "react-redux";
import HeaderSection from "../components/Lesson/HeaderSection";
import LessonLearnItem from "../components/Lesson/LessonLearnItem";
import LessonPracticeItem from "../components/Lesson/LessonPracticeItem";
import { MaterialIcons } from "@expo/vector-icons";
import ProgressingRow from "../components/List/ProgressingRow";
import UnderContruction from "../components/UnderContruction";

class LessonScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bookmarkedLesson: true,
    };
  }

  componentDidMount() {}

  handlePressBookmarkLesson = () => {
    const { navigation, route } = this.props;
    const { lessonName, lessonPoints, units } = route.params;

    this.setState({ bookmarkedLesson: !this.state.bookmarkedLesson }, () => {
      if (this.state.bookmarkedLesson) {
        ToastAndroid.show(
          `Saved "${lessonName}" to Bookmarks!`,
          ToastAndroid.SHORT
        );
      } else {
        ToastAndroid.show(
          `Deleted "${lessonName}" to Bookmarks!`,
          ToastAndroid.SHORT
        );
      }
    });
  };

  hanldeBookmarkUnit = () => {
    ToastAndroid.show("Saved to Bookmarks!", ToastAndroid.SHORT);
  };
  render() {
    // const { error, loading, lessons } = this.props;
    const { navigation, route } = this.props;
    const { lessonName, lessonPoints, units } = route.params;

    //Update header title
    navigation.setOptions({
      title: lessonName,
      headerRight: () =>
        this.state.bookmarkedLesson ? (
          <MaterialIcons
            name="bookmark"
            size={30}
            color={Colors.blue500}
            onPress={this.handlePressBookmarkLesson}
          />
        ) : (
          <MaterialIcons
            name="bookmark-border"
            size={30}
            color={Colors.blue500}
            onPress={this.handlePressBookmarkLesson}
          />
        ),
      headerRightContainerStyle: {
        padding: 10,
      },
    });

    return (
      <View style={{ flex: 1 }}>
        {units ? (
          <List.Section>
            <ProgressingRow
              currentPoints={0}
              maxPoints={lessonPoints}
              showProgressBar={true}
            />
          </List.Section>
        ) : (
          <UnderContruction />
        )}

        {units
          ? units.map((unit, index) => {
              let learn = unit["learn"];
              let practice = unit["practice"];

              return (
                <List.Section key={index}>
                  <HeaderSection
                    title={unit.name}
                    onBookmark={this.hanldeBookmarkUnit}
                  />
                  <Divider />
                  {learn
                    ? learn.map((item, index) => {
                        return (
                          <LessonLearnItem
                            key={item.key}
                            item={item}
                            key={index}
                            onPressItem={() => {
                              this.props.navigation.navigate("LearningScreen", {
                                learningItem: item,
                                unit: unit,
                              });
                            }}
                          />
                        );
                      })
                    : null}
                  {practice
                    ? practice.map((item, index) => {
                        return (
                          <LessonPracticeItem
                            key={item.key}
                            item={item}
                            key={index}
                            onPressItem={() =>
                              navigation.push("Practice", {
                                practiceItem: item,
                              })
                            }
                          />
                        );
                      })
                    : null}
                  <Divider />
                </List.Section>
              );
            })
          : null}
      </View>
    );
  }
}

const mapStateToProps = (state) => ({
  lessons: state.lessonReducer.items,
  loading: state.lessonReducer.loading,
  error: state.lessonReducer.error,
});

export default connect(mapStateToProps)(LessonScreen);
