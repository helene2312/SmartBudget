import { Button } from "../Button";

import { iconMap } from "../../IconMap/icon";
import { SidebarItem } from "./SidebarItem";
import { sidebarRoutes } from "./sidebar-routes";

import "./Sidebar.css";

type SidebarProps = {
  isCollapsed: boolean;
  onCollapsedChange: (isCollapsed: boolean) => void;
};

export function Sidebar({ isCollapsed, onCollapsedChange }: SidebarProps) {
  const CollapseIcon = isCollapsed ? iconMap.chevronRight : iconMap.chevronLeft;

  function handleCollapseToggle() {
    onCollapsedChange(!isCollapsed);
  }

  return (
    <aside
      className={["sidebar", isCollapsed ? "sidebar--collapsed" : ""]
        .filter(Boolean)
        .join(" ")}
    >
      <button
        type="button"
        className="sidebar__collapse-button"
        onClick={handleCollapseToggle}
        aria-label={isCollapsed ? "Expand sidebar" : "Collapse sidebar"}
      >
        <CollapseIcon className="sidebar__collapse-icon" aria-hidden="true" />
      </button>

      <header className="sidebar__header">
        <div
          className="sidebar__logo"
          onClick={() => (window.location.href = "/")}
        >
          SB
        </div>

        {!isCollapsed && (
          <div
            className="sidebar__brand"
            onClick={() => (window.location.href = "/")}
          >
            <span className="sidebar__brand-name">SmartBudget</span>

            <span className="sidebar__brand-description">Personal Wealth</span>
          </div>
        )}
      </header>

      {!isCollapsed && (
        <div className="sidebar__action">
          <Button
            buttonStyle="outline"
            iconLeft="add"
            className="sidebar__add-button"
          >
            New Entry
          </Button>
        </div>
      )}

      <nav className="sidebar__navigation" aria-label="Main navigation">
        {sidebarRoutes.map((route) => (
          <SidebarItem
            key={route.label}
            route={route}
            isCollapsed={isCollapsed}
          />
        ))}
      </nav>
    </aside>
  );
}
