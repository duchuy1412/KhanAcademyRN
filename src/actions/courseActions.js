export const FETCH_COURSES_BEGIN = "FETCH_COURSES_BEGIN";
export const FETCH_COURSES_SUCCESS = "FETCH_COURSES_SUCCESS";
export const FETCH_COURSES_FAILURE = "FETCH_COURSES_FAILURE";

export const fetchCoursesBegin = () => ({
  type: FETCH_COURSES_BEGIN,
});

export const fetchCoursesSuccess = (courses) => ({
  type: FETCH_COURSES_SUCCESS,
  payload: { courses },
});

export const fetchCoursesFailure = (error) => ({
  type: FETCH_COURSES_FAILURE,
  payload: { error },
});

export function fetchCourses(topicIndex) {
  return (dispatch) => {
    dispatch(fetchCoursesBegin());
    return fetch(
      "https://khanacademyrn.firebaseio.com/topic/" +
        topicIndex +
        "/course.json"
    )
      .then(handleErrors)
      .then((res) => res.json())
      .then((json) => {
        dispatch(fetchCoursesSuccess(json));
        return json;
      })
      .catch((error) => dispatch(fetchCoursesFailure(error)));
  };
}

// Handle HTTP errors since fetch won't.
function handleErrors(response) {
  if (!response.ok) {
    throw Error(response.statusText);
  }
  return response;
}
