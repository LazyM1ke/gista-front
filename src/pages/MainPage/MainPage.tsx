import Collapse from "../../components/Collapse/Collapse";
import GistaItem from "../../components/GistaItem/GistaItem";
import SectionService from "../../services/SectionService";
import {
  setSections,
  setSubsections,
} from "../../store/Reducers/SectionsReducer/SectionsReducer";
import { useAppDispatch, useAppSelector } from "../../store/hooks/hooks";
import "./MainPage.scss";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const MainPage = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { sections, subsections } = useAppSelector(
    (state) => state.SectionSlice
  );

  const getSections = () => {
    try {
      SectionService.fetchSections().then((response) => {
        dispatch(setSections(response.data.sections));
        dispatch(setSubsections(response.data.subsections));
      });
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
          {subsections.map(
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
