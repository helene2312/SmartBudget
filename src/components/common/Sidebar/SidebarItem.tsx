import { NavLink, useLocation } from "react-router-dom";

import { iconMap } from "../../IconMap/icon";
import type { SidebarRoute } from "./sidebar-routes";

type SidebarItemProps = {
  route: SidebarRoute;
  isCollapsed: boolean;
};

export function SidebarItem({ route, isCollapsed }: SidebarItemProps) {
  const { pathname } = useLocation();

  const Icon = iconMap[route.icon];

  const hasChildren = Boolean(route.children?.length);

  const isChildActive =
    route.children?.some((child) => pathname === child.to) ?? false;

  if (hasChildren) {
    if (isCollapsed) {
      if (!route.to) {
        return null;
      }

      return (
        <NavLink
          to={route.to}
          className={[
            "sidebar__item",
            "sidebar__item--collapsed",
            isChildActive ? "sidebar__item--active" : "",
          ]
            .filter(Boolean)
            .join(" ")}
          title={route.label}
          aria-label={route.label}
        >
          <Icon className="sidebar__icon" aria-hidden="true" />
        </NavLink>
      );
    }

    return (
      <div className="sidebar__group">
        <div
          className={[
            "sidebar__item",
            "sidebar__item--group",
            isChildActive ? "sidebar__item--group-active" : "",
          ]
            .filter(Boolean)
            .join(" ")}
        >
          <Icon className="sidebar__icon" aria-hidden="true" />

          <span className="sidebar__label">{route.label}</span>
        </div>

        <div className="sidebar__subnavigation">
          {route.children?.map((child) => (
            <NavLink
              key={child.to}
              to={child.to}
              className={({ isActive }) =>
                ["sidebar__subitem", isActive ? "sidebar__subitem--active" : ""]
                  .filter(Boolean)
                  .join(" ")
              }
            >
              {child.label}
            </NavLink>
          ))}
        </div>
      </div>
    );
  }

  if (!route.to) {
    return null;
  }

  return (
    <NavLink
      to={route.to}
      className={({ isActive }) =>
        [
          "sidebar__item",
          isCollapsed ? "sidebar__item--collapsed" : "",
          isActive ? "sidebar__item--active" : "",
        ]
          .filter(Boolean)
          .join(" ")
      }
      title={isCollapsed ? route.label : undefined}
      aria-label={isCollapsed ? route.label : undefined}
    >
      <Icon className="sidebar__icon" aria-hidden="true" />

      {!isCollapsed && <span className="sidebar__label">{route.label}</span>}
    </NavLink>
  );
}
