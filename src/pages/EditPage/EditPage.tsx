import Button from "../../UIkit/Button";
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
import { useForm, FieldName, FieldValues } from "react-hook-form";
import Select from "react-select";

interface selectOption {
  value: string;
  label: string;
}

const EditPage = () => {
  const { register, handleSubmit, getValues } = useForm();

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

  const onAddSubSection = handleSubmit((data) => {
    SectionService.addSubSection(
      data.addSectionName,
      selectedOption?.value
    ).then((response) => {
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
    });
  });

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

  const handleUpdateSubSectionName = handleSubmit((data) => {
    SectionService.updateSubSection(
      editedSubSection?.id,
      data.editSectionName
    ).then((response) => {
      if (response.data.status === "success") {
        setUpdateSectionModalActive(false);
        getSections();
      }
    });
  });

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
          setActive={setAddGistaModalActive}
          title="Добавить препарат"
          active={addGistaModalActive}
        >
          <TextInput placeholder="Раздел" type="text" />
          <TextInput placeholder="Название препарата" type="text" />
        </Modal>
      )}
      {addSectionModalActive && (
        <Modal
          setActive={setAddSectionModalActive}
          title="Добавить раздел"
          active={addSectionModalActive}
        >
          <form onSubmit={onAddSubSection} className="modal__form">
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
            <TextInput
              placeholder="Название подраздела"
              register={register}
              options={{ required: true, value: "" }}
              name="addSectionName"
              type="text"
            />
            <div className="modal__btns">
              <Button as={"submit"}>Добавить</Button>
              <Button
                onClick={() => setAddSectionModalActive(false)}
                type="borderless"
              >
                Отмена
              </Button>
            </div>
          </form>
        </Modal>
      )}
      {updateSectionModalActive && (
        <Modal
          setActive={setUpdateSectionModalActive}
          title="Изменить название подраздела"
          active={updateSectionModalActive}
        >
          <form onSubmit={handleUpdateSubSectionName}>
            <TextInput
              name="editSectionName"
              placeholder="Название подраздела"
              register={register}
              options={{ required: true, value: editedSubSection?.name }}
              type="text"
            />
            <div className="modal__btns">
              <Button as={"submit"}>Изменить</Button>
              <Button
                onClick={() => setUpdateSectionModalActive(false)}
                type="borderless"
              >
                Отмена
              </Button>
            </div>
          </form>
        </Modal>
      )}
    </div>
  );
};

export default EditPage;
