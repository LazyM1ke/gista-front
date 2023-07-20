import { combineReducers } from '@reduxjs/toolkit';
import UserSlice from './UserReducer/UserReducer'

const rootReducer = combineReducers({
    UserSlice
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;