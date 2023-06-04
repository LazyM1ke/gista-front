import React, { Dispatch, SetStateAction } from "react";

interface ModalProps {
  active: boolean;
  children: React.ReactNode;
  title: string;
  setActive: Dispatch<SetStateAction<boolean>>;
}

export default ModalProps;
