import React from "react";
import { View, StyleSheet, FlatList } from "react-native";
import InfiniteListRow from "../List/InfiniteListRow";
import { Divider, List } from "react-native-paper";
import _l from "../../lib/i18n";

class BrowseTopic extends React.Component {
  render() {
    const { navigation, data } = this.props;
    return (
      <View style={{ marginTop: 0 }}>
        <List.Section style={styles.container}>
          <List.Subheader style={styles.subHeader}>
            {_l.t("Browse Khan Academy")}
          </List.Subheader>
          <Divider inset={false} />
          <FlatList
            data={data}
            keyExtractor={(item) => item.key}
            ItemSeparatorComponent={() => <Divider inset={true} />}
            renderItem={({ item, index }) => (
              <InfiniteListRow
                data={item}
                key={item.key}
                inset={true}
                onPressItem={() => {
                  navigation.navigate("CourseList", {
                    topicName: item.name,
                    topicIndex: index,
                  });
                }}
              />
            )}
          />
        </List.Section>
      </View>
    );
  }
}

export default BrowseTopic;

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
