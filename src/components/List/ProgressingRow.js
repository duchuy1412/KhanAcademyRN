import * as React from "react";
import { View, Text } from "react-native";
import { Divider, List, useTheme, Colors } from "react-native-paper";
import _l from "../../lib/i18n";

function ProgressingRow(props) {
  const { colors, fonts } = useTheme();
  const { title } = props;

  return (
    <View style={{ backgroundColor: colors.background }}>
      <List.Item
        title={title + " (0%)"}
        titleNumberOfLines={2}
        titleStyle={[fonts.medium, { fontSize: 18 }]}
        description={_l.t("Mastery Points") + " (Level 1)"}
      />
      <Divider />
    </View>
  );
}

export default ProgressingRow;
