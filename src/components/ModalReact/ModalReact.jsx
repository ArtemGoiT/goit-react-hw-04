import ReactModal from "react-modal";
import css from "./ModalReact.module.css";
import { useEffect } from "react";

const Modal = ({ isOpen, closeModal, image }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={closeModal}
      shouldCloseOnEsc={true}
      overlayClassName={css.Overlay}
      className={css.Modal}
      shouldCloseOnOverlayClick={true}
    >
      <div className={css.modalimg}>
        {image && (
          <img src={image.urls.regular} alt="Selected" className={css.img} />
        )}
      </div>
    </ReactModal>
  );
};
export default Modal;
