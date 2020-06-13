import React from "react";
import { View, Image } from "react-native";
import { useTheme } from "react-native-paper";
import { Divider, List } from "react-native-paper";

function CourseListItem(props) {
  const { colors } = useTheme();
  return (
    <View>
      {/* <Text style={{ color: "red" }}>{this.props.title}</Text> */}
      <List.Item
        style={{ padding: 15 }}
        title={props.title}
        titleStyle={{ fontWeight: "bold" }}
        left={(props) => (
          <Image
            style={{
              borderRadius: 45,
              height: 50,
              width: 50,
              borderWidth: 2,
              borderColor: colors.primary,
            }}
            source={require("../assets/1stgrade.png")}
          />
        )}
        onPress={() => console.log("Pressed" + props.title)}
      />
      <Divider inset={true} />
    </View>
  );
}

export default CourseListItem;
