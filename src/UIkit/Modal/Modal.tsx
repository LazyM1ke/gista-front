import Button from "../Button";
import Icon from "../Icon";
import Typography from "../Typography";
import "./Modal.scss";
import ModalProps from "./ModalProps.types";
import React from "react";

const Modal = ({
  active,
  children,
  title,
  setActive,
  onAddButton,
  onCancelButton,
  mainButtonTitle,
}: ModalProps) => {
  return (
    <div className={active ? "modal active" : "modal"}>
      <div
        className={active ? "modal__content active" : "modal__content"}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="modal__close">
          <Button
            type="borderless"
            leftIcon={<Icon color="#007FFF" iconName="close" />}
            onClick={() => setActive(!active)}
          />
        </div>
        <div className="modal__content__container">
          <Typography className="modal__content__title" variant="headline-h2">
            {title}
          </Typography>
          {children}
          <div className="modal__btns">
            <Button onClick={onAddButton}>{mainButtonTitle}</Button>
            <Button onClick={onCancelButton} type="borderless">
              Отмена
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
