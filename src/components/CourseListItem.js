import React from "react";
import { View, Image } from "react-native";
import { Divider, List } from "react-native-paper";

function CourseListItem(props) {
  let icon = props.icon;

  function _onPress() {
    console.log("Pressed" + props.title);
  }

  return (
    <View>
      <List.Item
        style={{ padding: 10 }}
        title={props.title}
        titleStyle={{ fontWeight: "bold", paddingLeft: 5 }}
        left={(props) => (
          <Image
            style={{
              borderRadius: 45,
              height: 50,
              width: 50,
            }}
            source={icon ? { uri: icon } : require("../assets/1stgrade.png")}
          />
        )}
        onPress={() => {
          _onPress();
        }}
      />
      <Divider inset={true} />
    </View>
  );
}

export default CourseListItem;
