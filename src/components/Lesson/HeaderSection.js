import * as React from "react";
import { View } from "react-native";
import { List, useTheme, Colors } from "react-native-paper";
import { MaterialIcons } from "@expo/vector-icons";

function HeaderSection(props) {
  const { colors, fonts } = useTheme();
  const { title, onBookmark } = props;

  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: colors.background,
        paddingRight: 10,
      }}
    >
      <List.Subheader style={[fonts.medium, { fontSize: 18 }]}>
        {title}
      </List.Subheader>
      <MaterialIcons
        name="bookmark-border"
        size={30}
        color={Colors.blue500}
        onPress={onBookmark}
      />
    </View>
  );
}

export default HeaderSection;
