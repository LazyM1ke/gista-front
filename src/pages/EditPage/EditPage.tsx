import Icon from "../../UIkit/Icon";
import TextInput from "../../UIkit/Input/TextInput/TextInput";
import Modal from "../../UIkit/Modal/Modal";
import CustomSelect from "../../UIkit/Select/Select";
import { SelectItem } from "../../UIkit/Select/SelectProps.types";
import Typography from "../../UIkit/Typography";
import Collapse from "../../components/Collapse/Collapse";
import GistaItem from "../../components/GistaItem/GistaItem";
import {
  getSectionsDataResponse,
  sectionsState,
  subSectionsState,
} from "../MainPage/MainPage";
import "./EditPage.scss";
import axios from "axios";
import React, { useEffect, useState } from "react";
import Select from "react-select";
import { useRecoilState, useRecoilValue } from "recoil";

// const mainSections: SelectItem[] = [
//   {
//     id: "1",
//     name: "Бесплатный доступ",
//     value: "Бесплатный доступ",
//   },
//   {
//     id: "2",
//     name: "Общая гистология",
//     value: "Общая гистология",
//   },
//   {
//     id: "3",
//     name: "Частная гистология",
//     value: "Частная гистология",
//   },
// ];
interface selectOption {
  value: string;
  label: string;
}

interface addSubSectionResponseData {
  id: string;
  name: string;
  parent_id: string;
  status: string;
}

const EditPage = () => {
  const [sections, setSections] = useRecoilState(sectionsState);
  const [subSections, setSubSections] = useRecoilState(subSectionsState);

  const [addGistaModalActive, setAddGistaModalActive] =
    useState<boolean>(false);
  const [addSectionModalActive, setAddSectionModalActive] =
    useState<boolean>(false);

  const [selectedOption, setSelectedOption] = useState<selectOption | null>(
    null
  );

  const options: selectOption[] = sections.map((section) => ({
    value: section.id,
    label: section.name,
  }));

  const [gistaSection, setGistaSection] = useState<string>("");
  const [gistaName, setGistaName] = useState<string>("");
  const [newSubSectionName, setNewSubSectionName] = useState<string>("");

  const [isEditPosition, setIsEditPosition] = useState<boolean>(false);

  const handleAddSubSection = () => {
    axios
      .post<addSubSectionResponseData>(
        `${import.meta.env.VITE_API_URL}/api/section`,
        {
          name: newSubSectionName,
          parent_id: selectedOption?.value,
        }
      )
      .then((response) => {
        const { data } = response;
        setSubSections([
          ...subSections,
          {
            id: data.id,
            name: data.name,
            parent_id: data.parent_id,
          },
        ]);
        if (data.status === "success") {
          setSelectedOption(null);
          setNewSubSectionName("");
          setAddSectionModalActive(false);
        } else {
          alert("Ошибка !");
        }
      });
  };

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
    <div className="edit-page">
      <div className="edit-page__header">
        <Typography variant="headline-h2">
          Редактирование учебного плана
        </Typography>
        <div className="edit-page__header__btns">
          <div
            className="edit-page__header__btn"
            onClick={() => setIsEditPosition(!isEditPosition)}
          >
            <Typography color="#007FFF">
              {isEditPosition ? "Сохранить" : "Изменить порядок"}
            </Typography>
          </div>
          <div
            className="edit-page__header__btn"
            onClick={() => setAddGistaModalActive(true)}
          >
            <Icon color="#007FFF" iconName="bubble" />
            <Typography color="#007FFF">Добавить препарат</Typography>
          </div>
          <div
            className="edit-page__header__btn"
            onClick={() => setAddSectionModalActive(true)}
          >
            <Icon color="#007FFF" iconName="folder" />
            <Typography color="#007FFF">Добавить раздел</Typography>
          </div>
        </div>
      </div>
      <div className="edit-page__content">
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
                      <GistaItem editable />
                      <GistaItem editable />
                      <GistaItem editable />
                      <GistaItem editable />
                    </Collapse>
                  </>
                )
            )}
          </Collapse>
        ))}
        {/*<Collapse type="section" title="Общая гистология">*/}
        {/*  <GistaItem editable />*/}
        {/*  <GistaItem editable />*/}
        {/*  <GistaItem editable />*/}
        {/*  <GistaItem editable />*/}
        {/*</Collapse>*/}
        {/*<Collapse type="section" title="Частная гистология">*/}
        {/*  <Collapse*/}
        {/*    isEditPosition={isEditPosition}*/}
        {/*    editable*/}
        {/*    title="Органы кроветворения и иммуногенеза"*/}
        {/*    type="subsection"*/}
        {/*  >*/}
        {/*    <GistaItem />*/}
        {/*    <GistaItem />*/}
        {/*    <GistaItem />*/}
        {/*  </Collapse>*/}
        {/*  <Collapse*/}
        {/*    isEditPosition={isEditPosition}*/}
        {/*    editable*/}
        {/*    title="Органы кроветворения и иммуногенеза"*/}
        {/*    type="subsection"*/}
        {/*  >*/}
        {/*    <GistaItem />*/}
        {/*    <GistaItem />*/}
        {/*    <GistaItem />*/}
        {/*  </Collapse>*/}
        {/*  <Collapse*/}
        {/*    isEditPosition={isEditPosition}*/}
        {/*    editable*/}
        {/*    title="Органы кроветворения и иммуногенеза"*/}
        {/*    type="subsection"*/}
        {/*  >*/}
        {/*    <GistaItem />*/}
        {/*    <GistaItem />*/}
        {/*    <GistaItem />*/}
        {/*  </Collapse>*/}
        {/*</Collapse>*/}
      </div>
      {addGistaModalActive && (
        <Modal
          setActive={setAddGistaModalActive}
          title="Добавить препарат"
          active={addGistaModalActive}
        >
          <TextInput
            placeholder="Раздел"
            value={gistaSection}
            setValue={setGistaSection}
            type="text"
          />
          <TextInput
            placeholder="Название препарата"
            value={gistaName}
            setValue={setGistaName}
            type="text"
          />
        </Modal>
      )}
      {addSectionModalActive && (
        <Modal
          setActive={setAddSectionModalActive}
          title="Добавить раздел"
          active={addSectionModalActive}
          onAddButton={handleAddSubSection}
        >
          <Select
            placeholder="Основной раздел"
            styles={{
              control: (baseStyles, state) => ({
                ...baseStyles,
                width: "340px",
                height: "40px",
                borderStyle: "solid",
                borderWidth: "1px",
                borderColor: state.menuIsOpen ? "#007FFF" : "#DEDEDE",
                borderRadius: "8px",
                fontFamily: "Lato",
                fontStyle: "normal",
                fontWeight: 400,
                fontSize: "16px",
                lineHeight: "24px",
              }),
              option: (baseStyles, state) => ({
                cursor: "pointer",
                fontFamily: "inherit",
                fontStyle: "normal",
                fontWeight: 400,
                fontSize: "16px",
                lineHeight: "24px",
                padding: "8px 16px",
                ":hover": {
                  ...baseStyles[":hover"],
                  backgroundColor: "#F2F2F2",
                },
              }),
            }}
            defaultValue={selectedOption}
            onChange={setSelectedOption}
            options={options}
          />
          {/*<CustomSelect id="1" name="Основной раздел" data={mainSections} />*/}
          <TextInput
            placeholder="Название подраздела"
            value={newSubSectionName}
            setValue={setNewSubSectionName}
            type="text"
          />
        </Modal>
      )}
    </div>
  );
};

export default EditPage;
