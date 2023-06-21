export interface Section {
  id: string;
  name: string;
}

export interface SubSection {
  id: string;
  name: string;
  parent_id: string;
}
export interface SectionsResponse {
  sections: Section[];
  subsections: SubSection[];
}
