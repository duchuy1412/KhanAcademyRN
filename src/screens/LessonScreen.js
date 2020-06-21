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

class LessonScreen extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {}

  render() {
    // const { error, loading, lessons } = this.props;
    const { navigation, route } = this.props;
    const { lessonName, lessonPoints, units } = route.params;

    //Update header title
    navigation.setOptions({
      title: lessonName,
      headerRight: () => (
        <MaterialIcons
          name="bookmark-border"
          size={30}
          color={Colors.blue500}
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
      <View style={{ paddingBottom: 20 }}>
        <ProgressingRow
          currentPoints={0}
          maxPoints={lessonPoints}
          showProgressBar={true}
        />
        {units
          ? units.map((unit) => {
              let learn = unit["learn"];
              let practice = unit["practice"];

              return (
                <List.Section>
                  <HeaderSection
                    title={unit.name}
                    onBookmark={() =>
                      ToastAndroid.show(
                        "Saved into Bookmarks!",
                        ToastAndroid.SHORT
                      )
                    }
                  />
                  <Divider />
                  {learn
                    ? learn.map((item) => {
                        return (
                          <LessonLearnItem
                            item={item}
                            onPressItem={() => alert("Go to Video")}
                          />
                        );
                      })
                    : null}
                  {practice
                    ? practice.map((item) => {
                        return (
                          <LessonPracticeItem
                            item={item}
                            onPressItem={() => alert("Go to Practice")}
                          />
                        );
                      })
                    : null}
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
