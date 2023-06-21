import Collapse from "../../components/Collapse/Collapse";
import GistaItem from "../../components/GistaItem/GistaItem";
import SectionService from "../../services/SectionService";
import { API_URL } from "../../services/api";
import { AuthResponse } from "../../services/models/AuthResponse";
import { Section, SubSection } from "../../services/models/SectionsResponse";
import { userState } from "../AuthPage/AuthPage";
import "./MainPage.scss";
import axios from "axios";
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

  const checkAuth = async () => {
    try {
      const response = await axios.get<AuthResponse>(`${API_URL}/refresh`, {
        withCredentials: true,
      });
      localStorage.setItem("token", response.data.access);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    if (localStorage.getItem("token")) {
      checkAuth();
    } else {
      navigate("/auth");
    }
    getSections();
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
