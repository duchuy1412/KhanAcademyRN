const initState = {
  count: 0,
};

//test reducer
const account = (state = initState, action) => {
  if (action.type === "INCREASE") {
    return {
      count: state.count + 2,
    };
  }

  if (action.type === "DECREASE") {
    return {
      count: state.count - 2,
    };
  }

  return state;
};

export default account;
