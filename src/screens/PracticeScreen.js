import React from "react";
import { View, ToastAndroid, Modal, Alert, Text } from "react-native";
import _l from "../lib/i18n";
import BottomBar from "../components/Practice/BottomBar";
import QuestionArea from "../components/Practice/QuestionArea";
import { connect } from "react-redux";
import * as questionActions from "../actions/questionAction";
import UnderContruction from "../components/UnderContruction";
import ModalPractice from "../components/Practice/ModalPractice";

class PracticeScreen extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const { question } = this.props.route.params.practiceItem;
    this.props.saveQuestionToState(question);
    // this.props.reset();
    this.props.onNextQuestion();
  }

  componentWillUnmount() {
    this.props.reset();
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

    navigation.setOptions({ tabBarVisible: false });

    return question ? (
      <View style={{ flex: 1, justifyContent: "space-between" }}>
        <View style={{ flex: 1 }}>
          {currentQuestion ? <QuestionArea question={currentQuestion} /> : null}
          <ModalPractice isCorrect={correct} />
        </View>
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
