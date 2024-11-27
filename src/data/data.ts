import { DashboardAssets } from "../assets";

type NavigationLink = {
  id: number;
  path: string;
  title: string;
  image: string;
};

type GroupedNavigationLinks = {
  Customers: NavigationLink[];
  Businesses: NavigationLink[];
  Settings: NavigationLink[];
};

const {
  DashboardIcon,
  UsersIcon,
  GuarantorsIcon,
  Loans,
  LoanProduct,
  Decisions,
  Savings,
  Whitelist,
  Organization,
  SavingsProduct,
  FeesAndChargesIcon,
  Transactions,
  Services,
  ServiceAccount,
  Settlements,
  Reports,
  Karma,
  Preferences,
  FeesAndPricingIcon,
  Audit,
} = DashboardAssets;

// Standalone Dashboard link
export const dashboardLink: NavigationLink = {
  id: 1,
  title: "Dashboard",
  path: "/dashboard",
  image: DashboardIcon,
};

// Grouped navigation links
export const navigationLinks: GroupedNavigationLinks = {
  Customers: [
    { id: 1, title: "Users", path: "/users", image: UsersIcon },
    { id: 2, title: "Guarantors", path: "/guarantors", image: GuarantorsIcon },
    { id: 3, title: "Loans", path: "/loans", image: Loans },
    {
      id: 4,
      title: "Decision Models",
      path: "/decision-models",
      image: Decisions,
    },
    { id: 5, title: "Savings", path: "/savings", image: Savings },
    { id: 6, title: "Loan Request", path: "/loan-request", image: LoanProduct },
    { id: 7, title: "Whitelist", path: "/whitelist", image: Whitelist },
    { id: 8, title: "Karma", path: "/karma", image: Karma },
  ],
  Businesses: [
    {
      id: 9,
      title: "Organization",
      path: "/organization",
      image: Organization,
    },
    {
      id: 10,
      title: "Loan Products",
      path: "/loan-products",
      image: LoanProduct,
    },
    {
      id: 11,
      title: "Savings Products",
      path: "/saving-products",
      image: SavingsProduct,
    },
    {
      id: 12,
      title: "Fees and Charges",
      path: "/fee-and-charges",
      image: FeesAndChargesIcon,
    },
    {
      id: 13,
      title: "Transactions",
      path: "/transactions",
      image: Transactions,
    },
    { id: 14, title: "Services", path: "/services", image: Services },
    {
      id: 15,
      title: "Service Account",
      path: "/service-account",
      image: ServiceAccount,
    },
    { id: 16, title: "Settlements", path: "/settlements", image: Settlements },
    { id: 18, title: "Reports", path: "/reports", image: Reports },
  ],
  Settings: [
    { id: 19, title: "Preferences", path: "/preferences", image: Preferences },
    {
      id: 20,
      title: "Fees and Pricing",
      path: "/fees-and-pricing",
      image: FeesAndPricingIcon,
    },
    { id: 21, title: "Audit Logs", path: "/audit-logs", image: Audit },
    { id: 22, title: "Systems Messages", path: "/systems-messages", image: Audit },
  ],
};
