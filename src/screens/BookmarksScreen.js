import React from "react";
import {
  View,
  Text,
  Button,
  StyleSheet,
  Alert,
  RefreshControl,
  Image,
} from "react-native";
import {
  TouchableOpacity,
  ScrollView,
  FlatList,
} from "react-native-gesture-handler";
import { connect } from "react-redux";
import { List, Divider, Title } from "react-native-paper";
import _l from "../lib/i18n";
import LessonRow from "../components/List/LessonRow";
import bookmarkImage from "../assets/bookmark-ribbon.png";
export class BookmarksScreen extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      bookmarks: [],
      refreshing: false,
    };
  }

  componentDidMount() {
    this.fetchDataBookmark(this.props.user.uid);
  }

  componentWillReceiveProps(nextProps) {
    this.fetchDataBookmark(nextProps.user.uid);
  }
  fetchDataBookmark = async (userUid) => {
    if (userUid) {
      fetch(
        "https://khanacademyrn.firebaseio.com/users/" +
          userUid +
          "/bookmarks.json"
      )
        .then((res) => res.json())
        .then((json) => {
          this.setState({ bookmarks: json || [] });
        })
        .catch((e) => {
          Alert.alert("Error", e.toString());
        });
    }
  };

  _handleRefresh = () => {
    this.fetchDataBookmark(this.props.user.uid);
  };
  render() {
    const { navigation } = this.props;
    navigation.setOptions({
      title: _l.t("Bookmarks"),
    });

    if (this.state.bookmarks.length <= 0) {
      return (
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "#fff",
          }}
        >
          <Image source={bookmarkImage} resizeMode="contain" />
          <Title>You have no bookmarks.</Title>
        </View>
      );
    }
    return (
      <View style={styles.container}>
        <ScrollView
          refreshControl={
            <RefreshControl
              refreshing={this.state.refreshing}
              onRefresh={this._handleRefresh}
            />
          }
        >
          <FlatList
            data={this.state.bookmarks.lessons}
            renderItem={({ item, index }) => {
              return (
                <List.Section>
                  <LessonRow
                    showListUnit={false}
                    title={item.name}
                    icon={item.icon}
                    upNext={false}
                    points={0} // Pass current point of lesson here
                    maxPoints={1000}
                    units={item.units}
                    onPressItem={() => {}}
                  />
                </List.Section>
              );
            }}
          />
        </ScrollView>
      </View>
    );
  }
}
const mapStateToProps = (state) => ({
  signedIn: state.authReducer.signedIn,
  user: state.authReducer.user,
});
const mapDispatchToProps = () => ({});

export default connect(mapStateToProps, mapDispatchToProps)(BookmarksScreen);

const styles = StyleSheet.create({
  container: {},
});
