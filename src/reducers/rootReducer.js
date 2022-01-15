import { combineReducers } from "redux";
import { uiReducer } from "./uiReducer";
import {eggHatchReducer} from './EggHatchReducer'
export const rootReducer = combineReducers({
  uiState: uiReducer,
  eggToHatchState: eggHatchReducer,
});
