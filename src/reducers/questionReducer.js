import {
  FETCH_QUESTIONS_BEGIN,
  FETCH_QUESTIONS_SUCCESS,
  FETCH_QUESTIONS_FAILURE,
  NEXT_QUESTION,
  UPDATE_ANSWER_USER,
  CHECK_ANSWER,
  RESET,
  TRY_AGAIN,
} from "../actions/questionAction";

const initialState = {
  questions: [],
  currentQuestion: null,
  indexCurrentQuestion: -1,
  answerOfUser: null,
  endPractice: false,
  correct: null,
  loading: false,
  error: null,
};

export default function questionReducer(state = initialState, action) {
  switch (action.type) {
    case RESET:
      return {
        ...state,
        indexCurrentQuestion: -1,
        correct: null,
        answerOfUser: null,
        endPractice: false,
      };
    case FETCH_QUESTIONS_BEGIN:
      return {
        ...state,
        loading: true,
        error: null,
      };

    case FETCH_QUESTIONS_SUCCESS:
      return {
        ...state,
        loading: false,
        questions: action.payload.questions,
      };

    case FETCH_QUESTIONS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
        questions: [],
      };

    case NEXT_QUESTION:
      return {
        ...state,
        correct: null,
        answerOfUser: "",
        currentQuestion: state.questions[state.indexCurrentQuestion + 1],
        indexCurrentQuestion: state.indexCurrentQuestion + 1,
      };

    case TRY_AGAIN:
      return {
        ...state,
        correct: null,
        answerOfUser: "",
      };

    case UPDATE_ANSWER_USER:
      //clear state "correct" while inputing
      if (state.correct !== null) {
        return {
          ...state,
          correct: null,
          answerOfUser: action.answerOfUser,
        };
      }

      return {
        ...state,
        answerOfUser: action.answerOfUser,
      };
    case CHECK_ANSWER:
      // switch (state.currentQuestion.questionType) {
      //   case "INPUT_ANSWER":
      // condition: answer correct
      if (state.currentQuestion.correctAnswer == state.answerOfUser) {
        // check for finish practice to show "Finish" button
        if (state.indexCurrentQuestion === state.questions.length - 1) {
          return {
            ...state,
            correct: true,
            endPractice: true,
          };
        } else {
          // return correct is true, "Next" button will be shown
          return {
            ...state,
            correct: true,
          };
        }
      } else {
        //handling when answer is incorrect
        return {
          ...state,
          correct: false,
        };
      }

    //   default:
    //     return { state };
    // }

    default:
      return state;
  }
}
