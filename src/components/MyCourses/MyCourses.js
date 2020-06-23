import React from "react";
import { StyleSheet, View, FlatList } from "react-native";
import { List, Divider, Button, Colors } from "react-native-paper";
import _l from "../../lib/i18n";
import InfiniteListRow from "../List/InfiniteListRow";
import { MaterialIcons } from "@expo/vector-icons";

const myCourses = [
  {
    key: "1",
    name: "Algebra basics",
    icon: "",
  },
  {
    key: "2",
    name: "Statistics and probability",
    icon: "",
  },
];

class MyCourses extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View>
        <List.Section style={styles.container}>
          <View styles={styles.titleList}>
            <List.Subheader style={styles.subHeader}>
              {_l.t("My courses")}
            </List.Subheader>
            {/* <Button mode="outlined" compact={false} uppercase={false}>
              {_l.t("Edit")}
            </Button> */}
          </View>
          <Divider inset={false} />
          <FlatList
            data={myCourses}
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

export default MyCourses;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    borderColor: "lightgrey",
    borderBottomWidth: 1,
    borderTopWidth: 1,
  },
  subHeader: {
    fontWeight: "bold",
    color: "black",
    fontSize: 16,
  },
  titleList: {
    flexDirection: "row",
    justifyContent: "center",
    alignContent: "center",
    padding: 8,
  },
});
