import styles from "./DashboardCSS/Topbar.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleLeft,
  faAngleRight,
  faMagnifyingGlass,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { faBell } from "@fortawesome/free-regular-svg-icons";

const Topbar = ({
  notifications = 0,
  sidebarOpen,
  setSidebarOpen,
  search,
  setSearch,
}) => {
  const handleToggle = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className={styles.topbar}>
      <div className={styles.left}>
        {sidebarOpen && <h2 className={styles.logo}>SmartStock AI</h2>}

        <div className={styles.toggleButton} onClick={handleToggle}>
          <FontAwesomeIcon
            icon={sidebarOpen ? faAngleLeft : faAngleRight}
          />
        </div>

        {/* SKU SEARCH */}
        <div className={styles.searchWrapper}>
          <input
          type="text"
          placeholder="Search by SKU..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className={styles.searchInput} 
        />

          <FontAwesomeIcon
            icon={faMagnifyingGlass}
            className={styles.searchIcon}
          />
        </div>
      </div>

      <div className={styles.right}>
        <div className={styles.notification}>
          <FontAwesomeIcon icon={faBell} />
          {notifications > 0 && (
            <span className={styles.badge}>{notifications}</span>
          )}
        </div>

        <span className={styles.user}>
          <FontAwesomeIcon icon={faUser} />
        </span>
      </div>
    </div>
  );
};

export default Topbar;
