import React from "react";
import { View, Text, ToastAndroid } from "react-native";
import _l from "../lib/i18n";
import BottomBar from "../components/Practice/BottomBar";
import QuestionArea from "../components/Practice/QuestionArea";
import { connect } from "react-redux";
import * as questionActions from "../actions/questionAction";
import UnderContruction from "../components/UnderContruction";

class PracticeScreen extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const { question } = this.props.route.params.practiceItem;
    this.props.saveQuestionToState(question);
    this.props.reset();
    this.props.onNextQuestion();
  }

  render() {
    const { navigation, route } = this.props;
    const { question } = route.params.practiceItem;
    const {
      currentQuestion,
      correct,
      loading,
      error,
    } = this.props.questionState;

    if (correct === false) {
      ToastAndroid.show(_l.t("Try again!"), ToastAndroid.SHORT);
    } else if (correct === true) {
      ToastAndroid.show(_l.t("Great work!"), ToastAndroid.SHORT);
    }

    navigation.setOptions({ tabBarVisible: false });

    return question ? (
      <View style={{ flex: 1, justifyContent: "space-between" }}>
        {currentQuestion ? <QuestionArea question={currentQuestion} /> : null}
        <BottomBar numberQuestion={Object.keys(question).length} />
      </View>
    ) : (
      <UnderContruction />
    );
  }
}

const mapStateToProps = (state) => {
  return { questionState: state.questionReducer };
};

const mapDispatchToProps = (dispatch) => {
  return {
    reset: () => dispatch(questionActions.reset()),
    saveQuestionToState: (questionData) =>
      dispatch(questionActions.fetchQuestions(questionData)),
    onNextQuestion: () => dispatch(questionActions.nextQuestion()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PracticeScreen);
