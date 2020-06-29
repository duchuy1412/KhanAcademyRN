import React from "react";
import { View, StyleSheet, FlatList } from "react-native";
import InfiniteListRow from "../List/InfiniteListRow";
import { Divider, List } from "react-native-paper";
import _l from "../../lib/i18n";

class BrowseTopic extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
    };
  }

  async componentDidMount() {
    await fetch("https://khanacademyrn.firebaseio.com/topic.json")
      .then((res) => res.json())
      .then((json) => {
        this.setState({ data: json });
      })
      .catch((e) => {
        alert(e);
      });
  }
  render() {
    console.log("dataaaaa", this.state.data);
    const { navigation } = this.props;
    let { data } = this.state;
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
                icon={item.icon}
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
