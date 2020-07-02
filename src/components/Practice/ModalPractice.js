import * as React from "react";
import { View, Text, Animated, Easing } from "react-native";
import { Colors, useTheme } from "react-native-paper";
import { Ionicons } from "@expo/vector-icons";
import Modal from "react-native-modalbox";

const ModalPractice = (props) => {
  const { colors } = useTheme();
  return (
    <Modal style={{ height: 100, width: 100 }}>
      <View
        style={{
          backgroundColor: colors.background,
          padding: 18,
        }}
      >
        <View
          style={{
            borderWidth: 1,
            borderRadius: 10,
            borderColor: "lightgray",
            flexDirection: "row",
            paddingVertical: 15,
          }}
        >
          <View
            style={{
              paddingHorizontal: 15,
            }}
          >
            <Ionicons name="md-refresh" size={40} color={Colors.blue500} />
          </View>
          <View
            style={{
              paddingHorizontal: 15,
              backgroundColor: "lightblue",
              justifyContent: "center",
            }}
          >
            <Text>okkkk</Text>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default ModalPractice;
