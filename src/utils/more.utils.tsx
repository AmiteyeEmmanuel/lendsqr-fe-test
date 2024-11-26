import React from "react";
import styles from "../styles/components/content/more.module.scss";
import { Assets } from "../assets";

interface MoreModalProps {
  isOpen: boolean;
  closeModal: () => void;
  onViewDetails: () => void;
  onBlacklistUser: () => void;
  onActivateUser: () => void;
}

const MoreModal: React.FC<MoreModalProps> = ({
  isOpen,
  closeModal,
  onViewDetails,
  onBlacklistUser,
  onActivateUser,
}) => {
  if (!isOpen) return null;

  const { EyeICon, UserCheck, UserDelete } = Assets;
  

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modalContainer} onClick={closeModal}>
        <div className={styles.modalContent}>
          <div className={styles.buttonGroup}>
            <button onClick={onViewDetails} className={styles.viewDetails}>
              <img src={EyeICon} alt="view-details" />
              View Details
            </button>
            <button onClick={onBlacklistUser} className={styles.blacklistUser}>
              <img src={UserDelete} alt="view-details" />
              Blacklist User
            </button>
            <button onClick={onActivateUser} className={styles.activateUser}>
              <img src={UserCheck} alt="view-details" />
              Activate User
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MoreModal;
