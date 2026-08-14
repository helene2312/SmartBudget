import { createBrowserRouter } from "react-router-dom";

import TestDashboard from "../pages/test/TestDashboard";
import { AppLayout } from "../layout/AppLayout";
import { StylebookPage } from "../components/common/Stylebook";
/*import { DashboardPage } from '../pages/dashboard/DashboardPage';
import { MonthlyOverviewPage } from '../pages/monthly-overview/MonthlyOverviewPage';
import { YearlyOverviewPage } from '../pages/yearly-overview/YearlyOverviewPage';
import { AccountsPage } from '../pages/accounts/AccountsPage';
import { CategoriesPage } from '../pages/categories/CategoriesPage';
import { ReportsPage } from '../pages/reports/ReportsPage';*/

export const router = createBrowserRouter([
  {
    path: "/",
    Component: AppLayout,
    children: [
      {
        index: true,
        Component: TestDashboard,
      },
      {
        path: "stylebook",
        Component: StylebookPage,
      },
      /*{
        index: true,
        Component: DashboardPage,
      },
      {
        path: 'monthly',
        Component: MonthlyOverviewPage,
      },
      {
        path: 'yearly',
        Component: YearlyOverviewPage,
      },
      {
        path: 'accounts',
        Component: AccountsPage,
      },
      {
        path: 'categories',
        Component: CategoriesPage,
      },
      {
        path: 'reports',
        Component: ReportsPage,
      },*/
    ],
  },
]);
