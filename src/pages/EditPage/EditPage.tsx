import Icon from "../../UIkit/Icon";
import TextInput from "../../UIkit/Input/TextInput/TextInput";
import Modal from "../../UIkit/Modal/Modal";
import Typography from "../../UIkit/Typography";
import Collapse from "../../components/Collapse/Collapse";
import GistaItem from "../../components/GistaItem/GistaItem";
import SectionService from "../../services/SectionService";
import { SubSection } from "../../services/models/SectionsResponse";
import {
  addSubsection,
  deleteSubsection,
  setSections,
  setSubsections,
} from "../../store/Reducers/SectionsReducer/SectionsReducer";
import { useAppDispatch, useAppSelector } from "../../store/hooks/hooks";
import "./EditPage.scss";
import React, { useEffect, useState } from "react";
import Select from "react-select";

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

const EditPage = () => {
  const dispatch = useAppDispatch();
  const { sections, subsections } = useAppSelector(
    (state) => state.SectionSlice
  );
  const [addGistaModalActive, setAddGistaModalActive] =
    useState<boolean>(false);
  const [addSectionModalActive, setAddSectionModalActive] =
    useState<boolean>(false);
  const [updateSectionModalActive, setUpdateSectionModalActive] =
    useState<boolean>(false);

  const [selectedOption, setSelectedOption] = useState<selectOption | null>(
    null
  );

  const [editSubSectionName, setEditSubSectionName] = useState<string>("");
  const [editedSubSection, setEditedSubSection] = useState<SubSection | null>(
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
    SectionService.addSubSection(newSubSectionName, selectedOption?.value).then(
      (response) => {
        const { data } = response;
        dispatch(
          addSubsection({
            id: data.id,
            name: data.name,
            parent_id: data.parent_id,
          })
        );
        if (data.status === "success") {
          setSelectedOption(null);
          setNewSubSectionName("");
          setAddSectionModalActive(false);
        } else {
          alert("Подраздел с таким названием уже существует !");
        }
      }
    );
  };
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

  const handleDeleteSubSection = (subSectionId: string) => {
    dispatch(deleteSubsection(subSectionId));

    SectionService.deleteSubSection(subSectionId).then((response) => {
      response.data.status === "success"
        ? alert("Подраздел успешно удален =)")
        : alert("Произошла ошибка при удалении подраздела !");
    });
  };

  const handleEditSubSection = (subsection: SubSection) => {
    setEditedSubSection(subsection);
    setEditSubSectionName(subsection.name);
    setUpdateSectionModalActive(true);
  };

  const handleUpdateSubSectionName = () => {
    SectionService.updateSubSection(
      editedSubSection?.id,
      editSubSectionName
    ).then((response) => {
      setUpdateSectionModalActive(false);
      // if (response.data.status === "success") {
      //   axios
      //     .get<getSectionsDataResponse>(
      //       `${import.meta.env.VITE_API_URL}/api/section`
      //     )
      //     .then((response) => {
      //       const { data } = response;
      //       setSections(data.sections);
      //       setSubSections(data.subsections);
      //     });
      // // }
    });
  };

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
            {subsections.map(
              (subsection) =>
                subsection.parent_id === section.id && (
                  <>
                    <Collapse
                      onDeleteClick={() =>
                        handleDeleteSubSection(subsection.id)
                      }
                      onEditClick={() => handleEditSubSection(subsection)}
                      isEditPosition={isEditPosition}
                      editable
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
      </div>
      {addGistaModalActive && (
        <Modal
          mainButtonTitle="Добавить"
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
          mainButtonTitle="Добавить"
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
      {updateSectionModalActive && (
        <Modal
          onAddButton={handleUpdateSubSectionName}
          mainButtonTitle="Сохранить"
          setActive={setUpdateSectionModalActive}
          title="Изменить название подраздела"
          active={updateSectionModalActive}
        >
          <TextInput
            placeholder="Название подраздела"
            value={editSubSectionName}
            setValue={setEditSubSectionName}
            type="text"
          />
        </Modal>
      )}
    </div>
  );
};

export default EditPage;
