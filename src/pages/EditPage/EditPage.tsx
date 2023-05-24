import Button from "../../UIkit/Button";
import Icon from "../../UIkit/Icon";
import TextInput from "../../UIkit/Input/TextInput/TextInput";
import Modal from "../../UIkit/Modal/Modal";
import Typography from "../../UIkit/Typography";
import Collapse from "../../components/Collapse/Collapse";
import GistaItem from "../../components/GistaItem/GistaItem";
import "./EditPage.scss";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const EditPage = () => {
  const [modalActive, setModalActive] = useState<boolean>(false);
  const [gistaFolder, setGistaFolder] = useState<string>("");
  const [gistaName, setGistaName] = useState<string>("");
  const navigate = useNavigate();
  return (
    <div className="edit-page">
      <div className="edit-page__header">
        <Typography variant="headline-h2">
          Редактирование учебного плана
        </Typography>
        <div className="edit-page__header__btns">
          <div
            className="edit-page__header__btn"
            onClick={() => {
              setModalActive(true);
            }}
          >
            <Icon color="#007FFF" iconName="bubble" />
            <Typography color="#007FFF">Добавить препарат</Typography>
          </div>
          <div className="edit-page__header__btn">
            <Icon color="#007FFF" iconName="folder" />
            <Typography color="#007FFF">Добавить раздел</Typography>
          </div>
        </div>
      </div>
      <div className="edit-page__content">
        <Collapse title="Общая гистология">
          <GistaItem />
          <GistaItem />
          <GistaItem />
          <GistaItem />
        </Collapse>
        <Collapse title="Общая гистология">
          <GistaItem />
          <GistaItem />
          <GistaItem />
          <GistaItem />
        </Collapse>
      </div>
      {modalActive && (
        <Modal active={modalActive}>
          <div className="edit-page__modal__close">
            <Button
              type="borderless"
              leftIcon={<Icon color="#007FFF" iconName="close" />}
              onClick={() => setModalActive(!modalActive)}
            />
          </div>
          <div className="edit-page__modal__content">
            <Typography
              className="edit-page__modal__content__title"
              variant="headline-h2"
            >
              Добавить препарат
            </Typography>
            <TextInput
              placeholder="Раздел"
              value={gistaFolder}
              setValue={setGistaFolder}
              type="text"
            />
            <TextInput
              placeholder="Название препарата"
              value={gistaName}
              setValue={setGistaName}
              type="text"
            />
            <div className="edit-page__modal__btns">
              <Button>Добавить</Button>
              <Button type="borderless">Отмена</Button>
            </div>
          </div>
        </Modal>
      )}
    </div>
  );
};

export default EditPage;
