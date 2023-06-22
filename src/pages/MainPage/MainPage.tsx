import Collapse from "../../components/Collapse/Collapse";
import GistaItem from "../../components/GistaItem/GistaItem";
import SectionService from "../../services/SectionService";
import { Section, SubSection } from "../../services/models/SectionsResponse";
import { userState } from "../AuthPage/AuthPage";
import "./MainPage.scss";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { atom, useRecoilState, useRecoilValue } from "recoil";

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
  const getSections = async () => {
    try {
      const response = await SectionService.fetchSections();
      setSections(response.data.sections);
      setSubSections(response.data.subsections);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getSections();
  }, []);

  useEffect(() => {
    if (!localStorage.getItem("token")) {
      navigate("/auth");
    }
  }, [localStorage.getItem("token")]);

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
