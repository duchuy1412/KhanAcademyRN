import * as React from "react";
import { View, Image, StyleSheet, Text } from "react-native";
import { useTheme } from "react-native-paper";
import _l from "../lib/i18n";

const UnderContruction = (props) => {
  const { colors } = useTheme();
  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <Image
        style={{ height: 160, width: 250 }}
        resizeMode="contain"
        source={{ uri: "https://i.imgur.com/R9HEf0S.png" }}
      />
      <Text>{_l.t("underConstruction")}</Text>
    </View>
  );
};

export default UnderContruction;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
