import React from "react";
import { StyleSheet, View } from "react-native";
import { List } from "react-native-paper";
import _l from "../../lib/i18n";

const recentLessions = [
  {
    name: "Counting",
    icon: "",
    currentCourse: "Counting",
  },
  {
    name: "Counting",
    icon: "",
    currentCourse: "Counting",
  },
  {
    name: "Counting",
    icon: "",
    currentCourse: "Counting",
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
          {recentLessions.map((lession) => {
            return (
              <List.Item
                title={lession.name}
                description={lession.currentCourse}
                left={() => {
                  <List.Icon color="Colors.blue500" icon="folder" />;
                }}
              />
            );
          })}
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
    borderBottomWidth: 1,
    borderBottomColor: "lightgrey",
    fontWeight: "500",
    color: "black",
  },
});
