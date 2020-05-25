import React from 'react';

interface ModalProps {
  isShown : boolean
  titleText : string
  explanatoryText : string
  cancelButtonText : string
  confirmButtonText : string
  onCancel : (() => void)
  onConfirm : (() => void)
}

const Modal = ({
  isShown,
  titleText,
  explanatoryText,
  cancelButtonText,
  confirmButtonText,
  onCancel,
  onConfirm
} : ModalProps) => {
  if(isShown){
    return (
      <div className="overlay">
        <div className="center-content">
          <div className="modal">
            <div>{titleText}</div>
            <div>{explanatoryText}</div>
            <div>
              <button onClick={onCancel}>{cancelButtonText}</button>
              <button onClick={onConfirm}>{confirmButtonText}</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
  return <React.Fragment/>
}

export default Modal;
