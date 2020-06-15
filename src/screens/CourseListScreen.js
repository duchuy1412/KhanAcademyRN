import React from "react";
import { View, FlatList } from "react-native";
import _l from "../lib/i18n";
import InfiniteListRow from "../components/List/InfiniteListRow";
import { Divider } from "react-native-paper";
import { connect } from "react-redux";
import { fetchCourses } from "../actions/courseActions";
import { ActivityIndicator, Colors } from "react-native-paper";
import Spinner from "react-native-loading-spinner-overlay";

class CourseListScreen extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const { topicIndex } = this.props.route.params;
    this.props.dispatch(fetchCourses(topicIndex));
  }

  render() {
    const { error, loading, courses } = this.props;
    const { navigation, route } = this.props;
    const { topicName } = route.params;

    //Update header title
    navigation.setOptions({
      title: topicName,
    });

    return (
      <View style={{ flex: 1, backgroundColor: "#fff" }}>
        <Spinner
          visible={loading}
          customIndicator={
            <ActivityIndicator
              animating={true}
              size="large"
              color={Colors.blue500}
            />
          }
        />
        <FlatList
          data={courses}
          ItemSeparatorComponent={() => <Divider inset={true} />}
          renderItem={(item) => (
            <InfiniteListRow
              data={item}
              key={item.key}
              inset={true}
              icon={item.icon}
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

const mapStateToProps = (state) => ({
  courses: state.courseReducer.items,
  loading: state.courseReducer.loading,
  error: state.courseReducer.error,
});

export default connect(mapStateToProps)(CourseListScreen);
