import "./Modal.scss";
import ModalProps from "./ModalProps.types";

const Modal = ({ active, children }: ModalProps) => {
  return (
    <div className={active ? "modal active" : "modal"}>
      <div
        className={active ? "modal__content active" : "modal__content"}
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </div>
    </div>
  );
};

export default Modal;
