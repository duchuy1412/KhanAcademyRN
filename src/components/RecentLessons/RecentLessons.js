import React from "react";
import { StyleSheet, View, FlatList } from "react-native";
import { List, Divider, Title, Subheading } from "react-native-paper";
import _l from "../../lib/i18n";
import InfiniteListRow from "../List/InfiniteListRow";

const recentLessions = [
  {
    key: "1",
    name: "Counting",
    icon: "",
    description: "Counting",
  },
  {
    key: "2",
    name: "Counting",
    icon: "",
    description: "Counting",
  },
  {
    key: "3",
    name: "Counting",
    icon: "",
    description: "Counting",
  },
];

class RecentLessons extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View>
        <List.Section style={styles.container}>
          <List.Subheader style={styles.subHeader}>
            {_l.t("Recent lessons")}
          </List.Subheader>
          <Divider inset={false} />
          <FlatList
            data={recentLessions}
            keyExtractor={(item) => item.key}
            ItemSeparatorComponent={() => <Divider inset={true} />}
            renderItem={({ item }) => (
              <InfiniteListRow
                data={item}
                key={item.key}
                inset={true}
                onPressItem={() => {
                  // go to recent lessons
                  // this.props.navigation.navigate("CourseList");
                }}
              />
            )}
          />
        </List.Section>
      </View>
    );
  }
}

export default RecentLessons;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    borderColor: "lightgrey",
    borderBottomWidth: 1,
    borderTopWidth: 1,
  },
  subHeader: {
    fontWeight: "500",
    color: "black",
    fontSize: 16,
  },
});
