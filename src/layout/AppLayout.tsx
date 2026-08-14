import { useState } from "react";
import { Outlet } from "react-router-dom";

import { Sidebar } from "../components/common/Sidebar";
import "./app-layout.css";

export function AppLayout() {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);

  return (
    <div
      className={[
        "app-layout",
        isSidebarCollapsed ? "app-layout--sidebar-collapsed" : "",
      ]
        .filter(Boolean)
        .join(" ")}
    >
      <Sidebar
        isCollapsed={isSidebarCollapsed}
        onCollapsedChange={setIsSidebarCollapsed}
      />

      <main className="app-layout__content">
        <Outlet />
      </main>
    </div>
  );
}
