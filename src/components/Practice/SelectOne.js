import * as React from "react";
import { View, StyleSheet, Text } from "react-native";
import { RadioButton, List, Divider } from "react-native-paper";
import _l from "../../lib/i18n";
import { useSelector, useDispatch } from "react-redux";
import * as questionActions from "../../actions/questionAction";

const SelectOne = (props) => {
  const dispatch = useDispatch();
  const answerOfUser = useSelector(
    (state) => state.questionReducer.answerOfUser
  );
  const correct = useSelector((state) => state.questionReducer.correct);
  const currentQuestion = useSelector(
    (state) => state.questionReducer.currentQuestion
  );
  //   const [value, setValue] = React.useState("first");

  return (
    <View style={styles.answer}>
      <Text style={styles.content}>{_l.t("Select 1 answer")}</Text>
      {/* <TextInput
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
      /> */}
      <View
        style={{
          marginTop: 20,
        }}
      >
        <RadioButton.Group
          onValueChange={(answerOfUser) => {
            dispatch(questionActions.updateAnswerUser(answerOfUser));
          }}
          value={answerOfUser}
        >
          {currentQuestion.choices.map((item, index) => {
            return (
              <View key={index}>
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                  <RadioButton
                    value={item.choice}
                    disabled={correct !== null ? true : false}
                  />
                  <View
                    style={{
                      flex: 1,
                      padding: 15,
                      justifyContent: "center",
                    }}
                  >
                    <Text style={{ fontSize: 20 }}>{item.choice}</Text>
                  </View>
                </View>
                <Divider />
              </View>
            );
          })}
        </RadioButton.Group>
      </View>
    </View>
  );
};

export default SelectOne;

const styles = StyleSheet.create({
  content: {
    fontSize: 20,
    fontWeight: "bold",
  },
  answer: {
    marginTop: 20,
  },
});
