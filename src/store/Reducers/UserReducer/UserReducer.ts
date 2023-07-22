import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import initialState from "./initialState";


const UserSlice = createSlice({
    name: 'UserSlice',
    initialState,
    reducers: {
        setUserName(state, action: PayloadAction<string>) {
            state.name = action.payload
        },
        setSurname(state, action: PayloadAction<string>) {
            state.surname = action.payload
        },
        setPatronymic(state, action: PayloadAction<string>) {
            state.patronymic = action.payload
        },
        setEmail(state, action: PayloadAction<string>) {
            state.email = action.payload
        },
        setPassword(state, action: PayloadAction<string>) {
            state.password = action.payload
        },
        setPhone(state, action: PayloadAction<string>) {
            state.phone = action.payload
        },
    },
});

export default UserSlice.reducer;
export const { setPassword, setPatronymic, setPhone, setSurname, setUserName, setEmail } = UserSlice.actions;