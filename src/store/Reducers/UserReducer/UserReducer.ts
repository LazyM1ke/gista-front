import initialState from "./initialState";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const UserSlice = createSlice({
  name: "UserSlice",
  initialState,
  reducers: {
    setFirstName(state, action: PayloadAction<string>) {
      state.first_name = action.payload;
    },
    setSurname(state, action: PayloadAction<string>) {
      state.surname = action.payload;
    },
    setLastName(state, action: PayloadAction<string>) {
      state.last_name = action.payload;
    },
    setEmail(state, action: PayloadAction<string>) {
      state.email = action.payload;
    },
    setPhone(state, action: PayloadAction<string>) {
      state.phone = action.payload;
    },
  },
});

export default UserSlice.reducer;
export const { setPhone, setSurname, setLastName, setFirstName, setEmail } =
  UserSlice.actions;
