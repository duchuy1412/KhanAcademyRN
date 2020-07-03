import * as React from "react";
import { View, ToastAndroid } from "react-native";
import { List, Colors } from "react-native-paper";
import { MaterialIcons } from "@expo/vector-icons";

class HeaderSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bookmarked: false,
    };
  }

  handleBookmark = () => {
    this.setState({ bookmarked: !this.state.bookmarked }, () => {
      if (this.state.bookmarked) {
        ToastAndroid.show(
          `Saved "${this.props.title}" to Bookmarks!`,
          ToastAndroid.SHORT
        );
      } else {
        ToastAndroid.show(
          `Deleted "${this.props.title}" to Bookmarks!`,
          ToastAndroid.SHORT
        );
      }
    });
  };
  render() {
    const { title, onBookmark } = this.props;

    return (
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          backgroundColor: "#fff",
          paddingRight: 10,
        }}
      >
        <List.Subheader style={[{ fontSize: 18 }]}>{title}</List.Subheader>
        {this.state.bookmarked ? (
          <MaterialIcons
            name="bookmark"
            size={30}
            color={Colors.blue500}
            onPress={this.handleBookmark}
          />
        ) : (
          <MaterialIcons
            name="bookmark-border"
            size={30}
            color={Colors.blue500}
            onPress={this.handleBookmark}
          />
        )}
      </View>
    );
  }
}

export default HeaderSection;
