import * as React from "react";
import { View, Text, Image } from "react-native";
import {
  Divider,
  List,
  useTheme,
  Colors,
  TouchableRipple,
} from "react-native-paper";
import { Feather } from "@expo/vector-icons";
import _l from "../../lib/i18n";

function LessonRow(props) {
  const { colors, fonts } = useTheme();
  const {
    title,
    icon,
    upNext,
    points,
    maxPoints,
    onPressItem,
    units,
    showListUnit = true,
  } = props;

  return (
    <View style={{ backgroundColor: colors.background }}>
      <Divider />
      {upNext ? (
        <View style={{ backgroundColor: colors.primary, padding: 5 }}>
          <Text style={[fonts.medium, { color: "#fff" }]}>
            {_l.t("Up next")}
          </Text>
        </View>
      ) : null}
      <Divider />
      <List.Item
        title={title}
        titleStyle={[
          fonts.medium,
          { fontSize: 18 },
          upNext ? { color: colors.primary } : null,
        ]}
        description={points + "/" + maxPoints + " " + _l.t("points")}
        left={(props) => (
          <Image
            style={{
              borderRadius: 45,
              height: 50,
              width: 50,
            }}
            source={icon ? { uri: icon } : null}
          />
        )}
        right={() => (
          <View
            style={{
              alignItems: "center",
              flexDirection: "row",
            }}
          >
            <Feather name="chevron-right" size={24} color={colors.disabled} />
          </View>
        )}
        onPress={onPressItem}
      />
      <Divider />
      {showListUnit && (
        <TouchableRipple onPress={onPressItem}>
          <View style={{ padding: 15 }}>
            {units
              ? units.map((item) => {
                  return (
                    <Text
                      key={item.key}
                      style={[
                        fonts.regular,
                        { fontSize: 16, color: Colors.grey600 },
                      ]}
                    >
                      {item.name}
                    </Text>
                  );
                })
              : null}
          </View>
        </TouchableRipple>
      )}
    </View>
  );
}

export default LessonRow;
