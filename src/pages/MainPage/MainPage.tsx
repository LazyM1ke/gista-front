import Collapse from "../../components/Collapse/Collapse";
import GistaItem from "../../components/GistaItem/GistaItem";
import { userState } from "../AuthPage/AuthPage";
import "./MainPage.scss";
import axios from "axios";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { atom, useRecoilState, useRecoilValue } from "recoil";

export interface Section {
  id: string;
  name: string;
}

export interface SubSection {
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
  const user = useRecoilValue(userState);
  const navigate = useNavigate();
  const [sections, setSections] = useRecoilState(sectionsState);
  const [subSections, setSubSections] = useRecoilState(subSectionsState);
  console.log(typeof localStorage.getItem("access"));

  useEffect(() => {
    if (localStorage.getItem("user")) {
      axios
        .get<getSectionsDataResponse>(
          `${import.meta.env.VITE_API_URL}/api/section`,
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("access")}`,
            },
          }
        )
        .then((response) => {
          const { data } = response;
          setSections(data.sections);
          setSubSections(data.subsections);
        });
    } else {
      navigate("/auth");
    }
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
