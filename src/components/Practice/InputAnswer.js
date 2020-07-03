import * as React from "react";
import { View, StyleSheet, Text } from "react-native";
import { TextInput } from "react-native-paper";
import _l from "../../lib/i18n";
import { useSelector, useDispatch } from "react-redux";
import * as questionActions from "../../actions/questionAction";

const InputAnswer = (props) => {
  // const [text, setText] = React.useState("");
  const dispatch = useDispatch();
  const answerOfUser = useSelector(
    (state) => state.questionReducer.answerOfUser
  );
  const correct = useSelector((state) => state.questionReducer.correct);

  return (
    <View style={styles.answer}>
      <Text style={styles.content}>{_l.t("Type a number in the box")}</Text>
      <TextInput
        disabled={correct !== null ? true : false}
        mode="outlined"
        style={{
          width: 100,
          fontSize: 20,
          fontWeight: "bold",
          marginTop: 20,
        }}
        value={answerOfUser}
        onChangeText={(answerOfUser) => {
          // setText(text);
          dispatch(questionActions.updateAnswerUser(answerOfUser));
        }}
        keyboardType="number-pad"
      />
    </View>
  );
};

export default InputAnswer;

const styles = StyleSheet.create({
  content: {
    fontSize: 20,
    fontWeight: "bold",
  },
  answer: {
    marginTop: 20,
  },
});
