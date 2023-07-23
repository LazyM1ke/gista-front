import { Section, SubSection } from "../../../services/models/SectionsResponse";

interface SectionsState {
  sections: Section[];
  subsections: SubSection[];
}

const initialState: SectionsState = {
  sections: [],
  subsections: [],
};

export default initialState;
