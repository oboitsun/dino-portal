const initialState = {
  user: null,
};
const SET_USER = "SET_USER";
export const uiReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER:
      return { ...state, user: action.payload };

    default:
      return state;
  }
};

export const setUser = (payload) => ({ type: SET_USER, payload });
