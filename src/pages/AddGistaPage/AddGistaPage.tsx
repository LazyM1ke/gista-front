import Button from "../../UIkit/Button";
import Icon from "../../UIkit/Icon";
import TextInput from "../../UIkit/Input/TextInput/TextInput";
import Modal from "../../UIkit/Modal/Modal";
import Typography from "../../UIkit/Typography";
import UploadImg from "../../assets/images/uploadimg.png";
import ToolBar from "../../components/ToolBar/ToolBar";
import "./AddGistaPage.scss";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddGistaPage = () => {
  const navigate = useNavigate();
  return (
    <div className="add-gista-page">
      <div className="add-gista-page__header">
        <Button
          leftIcon={<Icon color="#007FFF" iconName="arrowLeft" />}
          type="borderless"
          onClick={() => navigate("/edit")}
        >
          Назад
        </Button>
        <Typography variant="headline-h2">
          Мазок крови человека – окраска: азур II и эозин
        </Typography>
        <Button type="secondary">Сохранить изменения</Button>
      </div>

      <div className="add-gista-page__content">
        <ToolBar />

        <div className="add-gista-page__upload">
          <div className="add-gista-page__upload__content">
            <img src={UploadImg} alt="upload-image" />
            <Button type="invert">Загрузить изображение</Button>
          </div>

          <div className="add-gista-page__layers">
            <Typography variant="text-16">Лимфоцит</Typography>
            <Typography variant="text-16">Моноцит</Typography>
            <Typography variant="text-16">Сегментоядерный нейтрофил</Typography>
            <Typography variant="text-16">Эритроцит</Typography>
            <Button
              leftIcon={<Icon color="#007FFF" iconName="add" />}
              type="borderless"
            >
              Добавить структуру
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddGistaPage;
