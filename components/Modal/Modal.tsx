import React, { useState } from "react";

interface ModalProps {
  onClose: () => void;
  isModalOpen: boolean;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isModalOpen, onClose, children }) => {
  // reusable modal component
  //
  const [startY, setStartY] = useState<number | null>(null);

  const handleTouchStart = (e: React.TouchEvent) => {
    // start tracking if the swipe is downwards

    setStartY(e.touches[0].clientY);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!startY) return;

    //if proper swipe-down happend then close the modal

    const currentY = e.touches[0].clientY;
    const diffY = currentY - startY;

    if (diffY > 100) {
      onClose();
    }
  };

  if (!isModalOpen) return null;

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center bg-black `}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      aria-modal="true"
      role="dialog"
    >
      {children}
    </div>
  );
};

export default Modal;
