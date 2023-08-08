import React, { Fragment } from "react";
import ReactDom from "react-dom";
import Classes from "./Modal.module.css";

const Modal = (props) => {
  // For react POrtal
  const BackDrop = () => <div className={Classes.backdrop}></div>;

  const ModalOverlay = (props) => {
    return (
      <div className={Classes.modal}>
        <div>{props.children}</div>
      </div>
    );
  };

  return (
    <Fragment>
      {ReactDom.createPortal(<BackDrop />, document.getElementById("overlay"))}
      {ReactDom.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        document.getElementById("overlay")
      )}
      {/* <BackDrop />
      <ModalOverlay>{props.children}</ModalOverlay> */}
    </Fragment>
  );
};

export default Modal;
