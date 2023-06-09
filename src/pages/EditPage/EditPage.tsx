import Icon from "../../UIkit/Icon";
import TextInput from "../../UIkit/Input/TextInput/TextInput";
import Modal from "../../UIkit/Modal/Modal";
import CustomSelect from "../../UIkit/Select/Select";
import { SelectItem } from "../../UIkit/Select/SelectProps.types";
import Typography from "../../UIkit/Typography";
import Collapse from "../../components/Collapse/Collapse";
import GistaItem from "../../components/GistaItem/GistaItem";
import "./EditPage.scss";
import React, { useState } from "react";
import Select from "react-select";

const mainSections: SelectItem[] = [
  {
    id: "1",
    name: "Бесплатный доступ",
    value: "Бесплатный доступ",
  },
  {
    id: "2",
    name: "Общая гистология",
    value: "Общая гистология",
  },
  {
    id: "3",
    name: "Частная гистология",
    value: "Частная гистология",
  },
];

const options = [
  { value: "Бесплатный доступ", label: "Бесплатный доступ" },
  { value: "Общая гистология", label: "Общая гистология" },
  { value: "Частная гистология", label: "Частная гистология" },
];

const EditPage = () => {
  const [addGistaModalActive, setAddGistaModalActive] =
    useState<boolean>(false);
  const [addSectionModalActive, setAddSectionModalActive] =
    useState<boolean>(false);

  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  const [gistaSection, setGistaSection] = useState<string>("");
  const [gistaName, setGistaName] = useState<string>("");

  const [isEditPosition, setIsEditPosition] = useState<boolean>(false);
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
        <Collapse type="section" title="Общая гистология">
          <GistaItem editable />
          <GistaItem editable />
          <GistaItem editable />
          <GistaItem editable />
        </Collapse>
        <Collapse type="section" title="Частная гистология">
          <Collapse
            isEditPosition={isEditPosition}
            editable
            title="Органы кроветворения и иммуногенеза"
            type="subsection"
          >
            <GistaItem />
            <GistaItem />
            <GistaItem />
          </Collapse>
          <Collapse
            isEditPosition={isEditPosition}
            editable
            title="Органы кроветворения и иммуногенеза"
            type="subsection"
          >
            <GistaItem />
            <GistaItem />
            <GistaItem />
          </Collapse>
          <Collapse
            isEditPosition={isEditPosition}
            editable
            title="Органы кроветворения и иммуногенеза"
            type="subsection"
          >
            <GistaItem />
            <GistaItem />
            <GistaItem />
          </Collapse>
        </Collapse>
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
          <CustomSelect id="1" name="Основной раздел" data={mainSections} />
          <TextInput
            placeholder="Название подраздела"
            value={gistaName}
            setValue={setGistaName}
            type="text"
          />
        </Modal>
      )}
    </div>
  );
};

export default EditPage;
