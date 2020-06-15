import React from "react";
import { Image, View, TouchableOpacity } from "react-native";
import { List, Divider, useTheme } from "react-native-paper";
import { TouchableNativeFeedback } from "react-native-gesture-handler";

const InfiniteListRow = (props) => {
  const { data, onPressItem, icon } = props;
  const { colors } = useTheme();

  console.log("Data", data);
  return (
    <View>
      <TouchableOpacity onPress={onPressItem}>
        <List.Item
          style={{ padding: 15 }}
          title={data.name}
          titleStyle={{ fontWeight: "bold" }}
          description={data.description}
          left={() => (
            <Image
              style={{
                borderRadius: 45,
                height: 50,
                width: 50,
                borderWidth: 1,
                borderColor: colors.primary,
              }}
              source={
                icon ? { uri: icon } : require("../../assets/1stgrade.png")
              }
            />
          )}
        />
      </TouchableOpacity>
    </View>
  );
};

export default InfiniteListRow;
