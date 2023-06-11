import Collapse from "../../components/Collapse/Collapse";
import GistaItem from "../../components/GistaItem/GistaItem";
import "./MainPage.scss";
import axios from "axios";
import React, { useEffect } from "react";
import { atom, useRecoilState } from "recoil";

interface Section {
  id: string;
  name: string;
}

interface SubSection {
  id: string;
  name: string;
  parent_id: string;
}
export interface getSectionsDataResponse {
  sections: Section[];
  subsections: SubSection[];
}
export const sectionsState = atom<Section[]>({
  key: "Sections",
  default: [],
});

export const subSectionsState = atom<SubSection[]>({
  key: "SubSections",
  default: [],
});
const MainPage = () => {
  const [sections, setSections] = useRecoilState(sectionsState);
  const [subSections, setSubSections] = useRecoilState(subSectionsState);

  useEffect(() => {
    axios
      .get<getSectionsDataResponse>(
        `${import.meta.env.VITE_API_URL}/api/section`
      )
      .then((response) => {
        const { data } = response;
        setSections(data.sections);
        setSubSections(data.subsections);
      });
  }, []);

  return (
    <div className="main-page">
      {sections.map((section) => (
        <Collapse key={section.id} title={section.name} type="section">
          {subSections.map(
            (subsection) =>
              subsection.parent_id === section.id && (
                <>
                  <Collapse
                    key={subsection.id}
                    title={subsection.name}
                    type="subsection"
                  >
                    <GistaItem />
                    <GistaItem />
                    <GistaItem />
                    <GistaItem />
                  </Collapse>
                </>
              )
          )}
        </Collapse>
      ))}
    </div>
  );
};

export default MainPage;
