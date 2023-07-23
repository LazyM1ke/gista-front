import SectionSlice from "./SectionsReducer/SectionsReducer";
import UserSlice from "./UserReducer/UserReducer";
import { combineReducers } from "@reduxjs/toolkit";

const rootReducer = combineReducers({
  UserSlice,
  SectionSlice,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
