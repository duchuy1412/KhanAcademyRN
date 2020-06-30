import * as React from "react";
import { View } from "react-native";
import { List, useTheme, Colors } from "react-native-paper";
import { Feather } from "@expo/vector-icons";

function LessonLearnItem(props) {
  const { colors, fonts } = useTheme();
  const { item, onPressItem } = props;

  return (
    <View style={{ backgroundColor: colors.background }}>
      <List.Item
        title={item.name}
        left={() => (
          <Feather name="play-circle" size={30} color={Colors.blue500} />
        )}
        onPress={onPressItem}
      />
    </View>
  );
}

export default LessonLearnItem;
