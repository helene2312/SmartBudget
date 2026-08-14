import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import HomeIcon from "@mui/icons-material/Home";
import SaveIcon from "@mui/icons-material/Save";
import DashboardOutlinedIcon from "@mui/icons-material/DashboardOutlined";
import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined";
import CategoryOutlinedIcon from "@mui/icons-material/CategoryOutlined";
import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ADBIcon from "@mui/icons-material/Adb";
import BookIcon from "@mui/icons-material/Book";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";

export const iconMap = {
  add: AddIcon,
  delete: DeleteIcon,
  edit: EditIcon,
  home: HomeIcon,
  save: SaveIcon,
  dashboard: DashboardOutlinedIcon,
  accountBalanceWallet: AccountBalanceWalletOutlinedIcon,
  category: CategoryOutlinedIcon,
  barChart: BarChartOutlinedIcon,
  chevronLeft: ChevronLeftIcon,
  chevronRight: ChevronRightIcon,
  test: ADBIcon,
  style: BookIcon,
  more_vert: MoreVertIcon,
  account_balance: AccountBalanceIcon,
} as const;

export type IconName = keyof typeof iconMap;
