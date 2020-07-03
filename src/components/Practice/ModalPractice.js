import * as React from "react";
import { View, Text, StyleSheet, Easing, Dimensions } from "react-native";
import { Colors, useTheme } from "react-native-paper";
import { Ionicons } from "@expo/vector-icons";
import Modal from "react-native-modalbox";
import _l from "../../lib/i18n";

var screen = Dimensions.get("window");

const ModalPractice = (props) => {
  const { colors } = useTheme();
  return (
    <Modal
      isOpen={props.isCorrect !== null ? true : false}
      style={{
        bottom: "5%",
        borderRadius: 10,
        justifyContent: "center",
        width: screen.width - 30,
        height: null,
      }}
      position="bottom"
      backdrop={true}
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
          {props.isCorrect === true ? (
            <Ionicons name="md-checkmark" size={40} color={Colors.green500} />
          ) : props.isCorrect === false ? (
            <Ionicons name="md-refresh" size={40} color={Colors.blue500} />
          ) : null}
        </View>
        <View
          style={{
            paddingHorizontal: 15,
            justifyContent: "center",
          }}
        >
          {props.isCorrect === true ? (
            <Text style={styles.modalText}>{_l.t("Great work!")}</Text>
          ) : props.isCorrect === false ? (
            <Text style={styles.modalText}>{_l.t("Try again!")}</Text>
          ) : null}
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalText: {
    fontSize: 20,
    fontWeight: "bold",
  },
});

export default ModalPractice;
