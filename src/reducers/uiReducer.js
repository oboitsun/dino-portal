const initialState = {
  user: null,
  eggHatchModal:false
};
const SET_USER = "SET_USER";
const SHOW_EGG_HATCH_MODAL = "SHOW_EGG_HATCH_MODAL";
export const uiReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER:
      return { ...state, user: action.payload };
    case SHOW_EGG_HATCH_MODAL:
      return {...state,eggHatchModal:action.payload}
    default:
      return state;
  }
};

export const setUser = (payload) => ({ type: SET_USER, payload });
export const showEggHatchModal = (payload) => ({ type: SHOW_EGG_HATCH_MODAL, payload });
