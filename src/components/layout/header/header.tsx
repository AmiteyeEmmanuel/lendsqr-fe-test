import  styles from "../../../styles/components/header.module.scss";
import { Assets } from "../../../assets";
import { Link } from "react-router-dom";

export default function header() {
  const { SignInLogo, searchIcon, avatarIcon, DropDown, BellIcon } = Assets;
  return (
    <div className= {`${styles["header-container"]}`} >
      <div className= {`${styles["header-content"]}`}>
        <div className={styles.left}>
          <img src={SignInLogo} alt="logo" />
        </div>

        <div className={styles.middle}>
            <div className={styles.search}>
            <input type="text" className={`${styles["search-input"]}`} placeholder="Search for anything" />
            <img src={searchIcon} alt="search_icon" className={`${styles["search_icon"]}`} />
            </div>
        </div>

        <div className={styles.right}>
          <div className={`${styles["right-content"]}`}>
            <div className={`${styles["doc-content"]}`}>
              <Link className={styles.link} to="/"> Docs </Link>
              <img src={BellIcon} className={styles.dropDown} />
            </div>
            <img src={avatarIcon} alt="User Avatar" className={styles.avatar} />
            <div className={styles.avatarContent}>
              <p className=""> Adedeji </p>
              <img src={DropDown} about="alt" />
            </div>

            {/* Sidebar Toggle Button (visible on small screens) */}
            {/* <button
                  className=" p-2 md:hidden"
                  onClick={toggleSidebar}
                >
                  {menuCollapsed ? (
                    <Bars3Icon className="w-6 h-6 text-black" />
                  ) : (
                    <XMarkIcon className="w-6 h-6 text-red" />
                  )}
                </button> */}
          </div>
        </div>
      </div>
    </div>
  );
}
