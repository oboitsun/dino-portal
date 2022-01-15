const initialState = {
    egg: null,
  };
  const SET_EGG = "SET_EGG";
  export const eggHatchReducer = (state = initialState, action) => {
    switch (action.type) {
      case SET_EGG:
       
        return { ...state, egg: action.payload };
  
      default:
        return state;
    }
  };
  
  export const setEgg = (payload) => ({ type: SET_EGG, payload });