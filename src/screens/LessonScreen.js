import React from "react";
import { View, ToastAndroid, Alert } from "react-native";
import _l from "../lib/i18n";
import { Divider, List, Colors, ProgressBar } from "react-native-paper";
import { connect } from "react-redux";
import HeaderSection from "../components/Lesson/HeaderSection";
import LessonLearnItem from "../components/Lesson/LessonLearnItem";
import LessonPracticeItem from "../components/Lesson/LessonPracticeItem";
import { MaterialIcons } from "@expo/vector-icons";
import ProgressingRow from "../components/List/ProgressingRow";
import UnderContruction from "../components/UnderContruction";
import * as UserActions from "../actions/userActions";
import { ScrollView } from "react-native-gesture-handler";
class LessonScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isBookmarkedLesson: false,
      bookmarksLesson: [],
    };
  }

  async componentDidMount() {
    await this.fetchDataBookmark();
    // this.setState({
    //   isBookmarkedLesson: this.state.bookmarksLesson.find(
    //     (e) => e.key === this.props.route.params.lesson.key
    //   ),
    // });
  }

  fetchDataBookmark = async () => {
    const { user } = this.props;
    if (user.uid) {
      fetch(
        "https://khanacademyrn.firebaseio.com/users/" +
          user.uid +
          "/bookmarks.json"
      )
        .then((res) => res.json())
        .then((json) => {
          this.setState({
            bookmarksLesson: (json && json.lessons) || [],
          });
        })
        .catch((e) => {
          Alert.alert("Error", e.toString());
        });
    }
  };
  handlePressBookmarkLesson = () => {
    const { navigation, route } = this.props;
    const { lessonName, lessonPoints, units, lesson } = route.params;

    if (!this.props.signedIn) {
      ToastAndroid.show(
        "You need Sign in or Sign up to use Bookmarks feature!",
        ToastAndroid.LONG
      );
      return;
    }

    this.fetchDataBookmark();

    this.setState(
      { isBookmarkedLesson: !this.state.isBookmarkedLesson },
      () => {
        if (this.state.isBookmarkedLesson) {
          this.props.dispatch(
            UserActions.storeDataToDB(this.props.user.uid, {
              bookmarks: {
                lessons: [...this.state.bookmarksLesson, lesson],
              },
            })
          );
          ToastAndroid.show(
            `Saved "${lessonName}" to Bookmarks!`,
            ToastAndroid.SHORT
          );
        } else {
          this.props.dispatch(
            UserActions.storeDataToDB(this.props.user.uid, {
              bookmarks: {
                lessons: this.state.bookmarksLesson.filter(
                  (e) => e.key !== lesson.key
                ),
              },
            })
          );
          ToastAndroid.show(
            `Deleted "${lessonName}" to Bookmarks!`,
            ToastAndroid.SHORT
          );
        }
      }
    );
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
        this.state.isBookmarkedLesson ? (
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

        <ScrollView>
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
                                this.props.navigation.navigate(
                                  "LearningScreen",
                                  {
                                    learningItem: item,
                                    unit: unit,
                                  }
                                );
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
        </ScrollView>
      </View>
    );
  }
}

const mapStateToProps = (state) => ({
  signedIn: state.authReducer.signedIn,
  user: state.authReducer.user,
  lessons: state.lessonReducer.items,
  loading: state.lessonReducer.loading,
  error: state.lessonReducer.error,
});

export default connect(mapStateToProps)(LessonScreen);
