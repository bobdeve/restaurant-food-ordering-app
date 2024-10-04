import React, { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';

export const Modal = ({ open, children, ...props }) => {
  const modalRef = useRef();

  useEffect(() => {
    const dialogRef = modalRef.current;
    
    if (open) {
      dialogRef.showModal();
    } else {
      dialogRef.close();
    }

    return () => {
      if (dialogRef.open) {
        dialogRef.close();
      }
    };
  }, [open]);

  return createPortal(
    <dialog ref={modalRef} {...props}>
      {children}
    </dialog>,
    document.getElementById('modal') // Assuming you have a div with id="modal" in your HTML
  );
};