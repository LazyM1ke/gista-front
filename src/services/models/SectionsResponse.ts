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

export interface addSubSectionResponse {
  id: string;
  name: string;
  parent_id: string;
  status: string;
}

export interface deleteSubSectionResponse {
  status: string;
}
