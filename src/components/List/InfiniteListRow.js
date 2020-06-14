import React from "react";
import { Image, View } from "react-native";
import { List, Divider, useTheme } from "react-native-paper";

const InfiniteListRow = (props) => {
  const { data, onPressItem } = props;
  const { colors } = useTheme();

  return (
    <View>
      <List.Item
        style={{ padding: 15 }}
        title={data.item.name}
        titleStyle={{ fontWeight: "bold" }}
        description={data.item.description}
        left={() => (
          <Image
            style={{
              borderRadius: 45,
              height: 50,
              width: 50,
              borderWidth: 1,
              borderColor: colors.primary,
            }}
            source={require("../../assets/1stgrade.png")}
          />
        )}
        onPress={onPressItem}
      />
    </View>
  );
};

export default InfiniteListRow;
