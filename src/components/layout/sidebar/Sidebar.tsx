import React from "react";
import { navigationLinks, dashboardLink } from "../../../data/data";
import styles from "../../../styles/components/sidebar.module.scss";
import { DashboardAssets } from "../../../assets";

type SidebarProps = {
  activeSection: string;
  setActiveSection: (section: string) => void;
};

const Sidebar: React.FC<SidebarProps> = ({
  activeSection,
  setActiveSection,
}) => {
  const { Organization, arrowDown, SignOutIcon } = DashboardAssets;

  return (
    <div className={styles.sidebar}>
      {/* User Info Section */}
      <div className={styles["user-info"]}>
        <img
          src={Organization}
          alt="Organization Logo"
          className={styles["organization-logo"]}
        />
        <span className={styles["info-name"]}>Switch Organization</span>
        <img src={arrowDown} alt="Toggle" className={styles["arrow-down"]} />
      </div>

      {/* Sidebar Navigation */}
      <nav className={styles.navigation}>
        <ul className={styles["nav-list"]}>
          {/* Standalone Dashboard */}
          <li
            className={`${styles["nav-item"]} ${
              activeSection === dashboardLink.title ? styles.active : ""
            }`}
            onClick={() => setActiveSection(dashboardLink.title)}
          >
            <div className={styles["nav-link"]}>
              <img
                src={dashboardLink.image}
                alt={dashboardLink.title}
                className={styles["nav-link-icon"]}
              />
              <span className={styles["nav-link-text"]}>
                {dashboardLink.title}
              </span>
            </div>
          </li>

          {/* Grouped Navigation */}
          {Object.entries(navigationLinks).map(([category, links]) => (
            <li className={styles["nav-category"]} key={category}>
              <span className={styles["nav-category-title"]}>{category}</span>
              <ul className={styles["nav-sublist"]}>
                {links.map((link) => (
                  <li
                    key={link.id}
                    className={`${styles["nav-item"]} ${
                      activeSection === link.title ? styles.active : ""
                    }`}
                    onClick={() => setActiveSection(link.title)}
                  >
                    <div className={styles["nav-link"]}>
                      <img
                        src={link.image}
                        alt={link.title}
                        className={styles["nav-link-icon"]}
                      />
                      <span className={styles["nav-link-text"]}>
                        {link.title}
                      </span>
                    </div>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </nav>

      <div className={styles.logoutContaniner}>
        <div className={styles.logout}>
          <img src={SignOutIcon} alt="logout" />
          <p> Logout</p>
        </div>
         <p className={styles.version}> v1.2.0 </p>
      </div>
    </div>
  );
};

export default Sidebar;
