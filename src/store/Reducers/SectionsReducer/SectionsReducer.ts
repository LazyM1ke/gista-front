import { Section, SubSection } from "../../../services/models/SectionsResponse";
import initialState from "./initialState";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const SectionsSlice = createSlice({
  name: "SectionsSlice",
  initialState,
  reducers: {
    setSections(state, action: PayloadAction<Section[]>) {
      state.sections = action.payload;
    },
    setSubsections(state, action: PayloadAction<SubSection[]>) {
      state.subsections = action.payload;
    },
    deleteSubsection(state, action: PayloadAction<string>) {
      state.subsections = state.subsections.filter(
        (subSection) => subSection.id !== action.payload
      );
    },
    addSubsection(state, action: PayloadAction<SubSection>) {
      state.subsections.push(action.payload);
    },
  },
});

export default SectionsSlice.reducer;
export const { addSubsection, deleteSubsection, setSections, setSubsections } =
  SectionsSlice.actions;
