import * as React from "react";
import { View, Text, Image } from "react-native";
import { Divider, List, useTheme, Colors } from "react-native-paper";
import { Feather } from "@expo/vector-icons";
import _l from "../../lib/i18n";

function LessonRow(props) {
  const { colors, fonts } = useTheme();
  const { title, icon, upNext } = props;

  return (
    <View style={{ backgroundColor: colors.background }}>
      {upNext ? (
        <View style={{ backgroundColor: colors.primary, padding: 5 }}>
          <Text style={[fonts.medium, { color: "#fff" }]}>
            {_l.t("Up next")}
          </Text>
        </View>
      ) : null}
      <List.Item
        title={title}
        titleStyle={[
          fonts.medium,
          { fontSize: 18 },
          upNext ? { color: colors.primary } : null,
        ]}
        description="Description"
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
        onPress={() => {
          alert("ok");
        }}
      />
      <Divider />
      <View style={{ padding: 15 }}>
        <Text style={[fonts.regular, { fontSize: 16, color: Colors.grey600 }]}>
          Counting
        </Text>
      </View>
    </View>
  );
}

export default LessonRow;
