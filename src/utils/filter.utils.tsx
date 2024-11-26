import React, { useState } from "react";
import styles from "../styles/components/content/modal.module.scss";

interface FilterProps {
  isOpen: boolean;
  closeModal: () => void;
  onApplyFilters: (filters: Record<string, string>) => void;
}

export default function FilterModal({
  isOpen,
  closeModal,
  onApplyFilters,
}: FilterProps) {
  const [filters, setFilters] = useState<Record<string, string>>({
    organization: "",
    username: "",
    email: "",
    phone: "",
    date: "",
    status: "",
  });

  const handleChange = (key: string, value: string) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      [key]: value,
    }));
  };

  const handleApply = (event: React.FormEvent) => {
    event.preventDefault();
    onApplyFilters(filters);
    closeModal();
  };

  if (!isOpen) return null;

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modalContent}>
        <form onSubmit={handleApply}>
          <label> Organization</label>
          <select
            value={filters.organization}
            onChange={(e) => handleChange("organization", e.target.value)}
          >
            <option value="">Select</option>
            <option value="LendSqr">LendSqr</option>
            <option value="Irorun">Irorun</option>
            <option value="LendStar">LendStar</option>
          </select>

          <label> Username</label>
          <input
            type="text"
            placeholder="Username"
            value={filters.username}
            onChange={(e) => handleChange("username", e.target.value)}
          />

          <label> Email</label>
          <input
            type="email"
            placeholder="Email"
            value={filters.email}
            onChange={(e) => handleChange("email", e.target.value)}
          />

          <label> Date </label>
          <input
            type="date"
            placeholder="Date"
            value={filters.date}
            onChange={(e) => handleChange("date", e.target.value)}
          />

          <label> Phone Number </label>
          <input
            type="text"
            placeholder="Phone"
            value={filters.phone}
            onChange={(e) => handleChange("phone", e.target.value)}
          />

          <label> Status </label>
          <select
            value={filters.status}
            onChange={(e) => handleChange("status", e.target.value)}
          >
            <option value="">Select Status</option>
            <option value="Active">Active</option>
            <option value="Pending">Pending</option>
            <option value="Blacklisted">Blacklisted</option>
            <option value="Inactive">Inactive</option>
          </select>
          <div className={styles.modalFooter}>
            <button
              type="button"
              onClick={closeModal}
              className={styles.cancelButton}
            >
              Reset
            </button>
            <button type="submit" className={styles.applyButton}>
              Filters
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
