import * as React from "react";
import { View, ScrollView, StyleSheet, Text, Image } from "react-native";
import InputAnswer from "./InputAnswer";
import SelectOne from "./SelectOne";
import { useTheme } from "react-native-paper";

const QuestionArea = (props) => {
  const { question } = props;
  const { colors } = useTheme();

  return (
    <View
      style={{
        backgroundColor: colors.background,
        flex: 1,
        alignSelf: "stretch",
        padding: 18,
      }}
    >
      <ScrollView style={styles.question}>
        <Text style={styles.content}>{question.content}</Text>
        <Image
          style={styles.imageContent}
          source={question.image ? { uri: question.image } : null}
        />
        {question.questionType === "INPUT_ANSWER" ? (
          <InputAnswer />
        ) : question.questionType === "SELECT_ONE" ? (
          <SelectOne />
        ) : null}
      </ScrollView>
    </View>
  );
};

export default QuestionArea;

const styles = StyleSheet.create({
  container: {},
  question: {},
  content: {
    fontSize: 20,
    fontWeight: "bold",
  },
  imageContent: {
    width: null,
    height: 80,
    resizeMode: "contain",
  },
  answer: {
    marginTop: 20,
  },
});
