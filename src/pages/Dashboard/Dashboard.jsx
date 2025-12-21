import { useState } from "react";
import Sidebar from "./Sidebar";
import Topbar from "./Topbar";
import { Outlet } from "react-router-dom";
import styles from "./DashboardCSS/Dashboard.module.css";

const Dashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [search, setSearch] = useState(""); // ✅ ADD THIS

  return (
    <div className={styles.dashboardLayout}>
      <Topbar
        notifications={3}
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
        search={search}          // ✅ PASS
        setSearch={setSearch}    // ✅ PASS
      />

      <div className={styles.body}>
        {sidebarOpen && <Sidebar />}
        <Outlet context={{ search }} /> {/* ✅ SHARE VIA OUTLET */}
      </div>
    </div>
  );
};

export default Dashboard;
