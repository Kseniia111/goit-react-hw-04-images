import { useEffect } from 'react';
import css from './Modal.module.css';

function Modal({ largeImageURL, onToggleModal }) {
  useEffect(() => {
    const handleKeyDown = e => {
      if (e.code === 'Escape') {
        onToggleModal();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onToggleModal]);

  const handleBackdropClick = e => {
    if (e.currentTarget === e.target) {
      onToggleModal();
    }
  };

  return (
    <div className={css.overlay} onClick={handleBackdropClick}>
      <div className={css.modal}>
        <img src={largeImageURL} alt="" />
      </div>
    </div>
  );
}
export default Modal;
