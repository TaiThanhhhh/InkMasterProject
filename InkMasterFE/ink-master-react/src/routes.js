const routes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    component: Dashboard,
    layout: "/",
  },
  {
    path: "/products",
    name: "Products List",
    component: ProductsList,
    layout: "/",
  },
  {
    path: "/user-management",
    name: "User Management",
    component: UserManagement, // Giả sử bạn đã tạo component này
    layout: "/admin",
  },
  {
    path: "/tattoo-artist-management",
    name: "Tattoo Artist Management",
    component: TattooArtistManagement, // Giả sử bạn đã tạo component này
    layout: "/admin",
  },
  {
    path: "/appointment-management",
    name: "Appointment Management",
    component: AppointmentManagement, // Giả sử bạn đã tạo component này
    layout: "/admin",
  },
  {
    path: "/promotions",
    name: "Promotions",
    component: Promotions, // Giả sử bạn đã tạo component này
    layout: "/admin",
  },
  {
    path: "/events",
    name: "Events",
    component: Events, // Giả sử bạn đã tạo component này
    layout: "/admin",
  },
  {
    path: "/financial-reports",
    name: "Financial Reports",
    component: FinancialReports, // Giả sử bạn đã tạo component này
    layout: "/admin",
  },
  {
    path: "/equipment-management",
    name: "Equipment Management",
    component: EquipmentManagement, // Giả sử bạn đã tạo component này
    layout: "/admin",
  },
  {
    path: "/loyalty-program",
    name: "Loyalty Program",
    component: LoyaltyProgram, // Giả sử bạn đã tạo component này
    layout: "/admin",
  },
];

export default routes;