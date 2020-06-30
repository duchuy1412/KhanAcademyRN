export const FETCH_QUESTIONS_BEGIN = "FETCH_QUESTIONS_BEGIN";
export const FETCH_QUESTIONS_SUCCESS = "FETCH_QUESTIONS_SUCCESS";
export const FETCH_QUESTIONS_FAILURE = "FETCH_QUESTIONS_FAILURE";
export const NEXT_QUESTION = "NEXT_QUESTION";
export const CHECK_ANSWER = "CHECK_ANSWER";
export const RESET = "RESET";
export const UPDATE_ANSWER_USER = "UPDATE_ANSWER_USER";

export const reset = () => ({
  type: RESET,
});

export const fetchQuestionsBegin = () => ({
  type: FETCH_QUESTIONS_BEGIN,
});

export const fetchQuestionsSuccess = (questions) => ({
  type: FETCH_QUESTIONS_SUCCESS,
  payload: { questions },
});

export const fetchQuestionsFailure = (error) => ({
  type: FETCH_QUESTIONS_FAILURE,
  payload: { error },
});

export const nextQuestion = () => ({
  type: NEXT_QUESTION,
});

export const updateAnswerUser = (answer) => ({
  type: UPDATE_ANSWER_USER,
  answerOfUser: answer,
});

export const checkAnswer = () => ({
  type: CHECK_ANSWER,
});

export function fetchQuestions(questions) {
  return (dispatch) => {
    dispatch(fetchQuestionsBegin());
    questions
      ? dispatch(fetchQuestionsSuccess(questions))
      : dispatch(fetchQuestionsFailure("Not found"));
  };
}
