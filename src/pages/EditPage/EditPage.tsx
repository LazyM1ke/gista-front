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
import Select from "react-select/base";

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

const EditPage = () => {
  const [addGistaModalActive, setAddGistaModalActive] =
    useState<boolean>(false);
  const [addSectionModalActive, setAddSectionModalActive] =
    useState<boolean>(false);

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
