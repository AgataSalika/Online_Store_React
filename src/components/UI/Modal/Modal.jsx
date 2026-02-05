import React from "react";
import classes from "./Modal.module.css"

const Modal = ({setShowPopUp, children}) => {
      
console.log(children);
  return (
    <div className={classes.modal}>
      <div className={classes.content}>
      {children}
        <button className={classes.modalBtn} onClick={function () {
          setShowPopUp(false)
        }}>X</button>
      </div>
      
    </div>
  );
};

export default Modal;
