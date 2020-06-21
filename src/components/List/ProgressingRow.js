import * as React from "react";
import { View } from "react-native";
import {
  Divider,
  List,
  useTheme,
  Colors,
  ProgressBar,
} from "react-native-paper";
import _l from "../../lib/i18n";

function ProgressingRow(props) {
  const { colors, fonts } = useTheme();
  const { currentPoints, maxPoints, showProgressBar } = props;
  const percent = currentPoints / maxPoints;
  const percentAround = Math.round((currentPoints / maxPoints) * 100);

  return (
    <View style={{ backgroundColor: colors.background }}>
      <List.Item
        title={currentPoints + "/" + maxPoints + " (" + percentAround + "%)"}
        titleNumberOfLines={2}
        titleStyle={[fonts.medium, { fontSize: 18 }]}
        description={_l.t("Mastery Points")}
      />
      {showProgressBar ? (
        <ProgressBar
          progress={percent}
          color={colors.primary}
          style={{
            height: 15,
            marginHorizontal: 10,
            marginBottom: 15,
            borderRadius: 45,
          }}
        />
      ) : null}
      <Divider />
    </View>
  );
}

export default ProgressingRow;
