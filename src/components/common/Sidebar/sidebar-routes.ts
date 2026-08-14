import type { IconName } from "../../IconMap/icon";

export type SidebarChildRoute = {
  label: string;
  to: string;
};

export type SidebarRoute = {
  label: string;
  icon: IconName;
  to?: string;
  children?: SidebarChildRoute[];
};

export const sidebarRoutes: SidebarRoute[] = [
  {
    label: "Dashboard",
    icon: "dashboard",
    to: "/monthly",
    children: [
      {
        label: "Monthly Overview",
        to: "/monthly",
      },
      {
        label: "Yearly Overview",
        to: "/yearly",
      },
    ],
  },
  {
    label: "Accounts",
    icon: "accountBalanceWallet",
    to: "/accounts",
  },
  {
    label: "Categories",
    icon: "category",
    to: "/categories",
  },
  {
    label: "Reports",
    icon: "barChart",
    to: "/reports",
  },
  {
    label: "Stylebook",
    icon: "style",
    to: "/stylebook",
  },
  {
    label: "Test Dashboard",
    icon: "test",
    to: "/",
  },
];
