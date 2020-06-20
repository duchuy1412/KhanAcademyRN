export const FETCH_LESSONS_BEGIN = "FETCH_LESSONS_BEGIN";
export const FETCH_LESSONS_SUCCESS = "FETCH_LESSONS_SUCCESS";
export const FETCH_LESSONS_FAILURE = "FETCH_LESSONS_FAILURE";

export const fetchLessonsBegin = () => ({
  type: FETCH_LESSONS_BEGIN,
});

export const fetchLessonsSuccess = (lessons) => ({
  type: FETCH_LESSONS_SUCCESS,
  payload: { lessons },
});

export const fetchLessonsFailure = (error) => ({
  type: FETCH_LESSONS_FAILURE,
  payload: { error },
});

// Get lessons of a course
export function fetchLessons(topicIndex, courseIndex) {
  return (dispatch) => {
    dispatch(fetchLessonsBegin());
    return fetch(
      "https://khanacademyrn.firebaseio.com/topic/" +
        topicIndex +
        "/course/" +
        courseIndex +
        "/lessons.json"
    )
      .then(handleErrors)
      .then((res) => res.json())
      .then((json) => {
        dispatch(fetchLessonsSuccess(json));
        return json;
      })
      .catch((error) => dispatch(fetchLessonsFailure(error)));
  };
}

// Handle HTTP errors since fetch won't.
function handleErrors(response) {
  if (!response.ok) {
    throw Error(response.statusText);
  }
  return response;
}
