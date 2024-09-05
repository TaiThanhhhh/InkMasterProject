import React from "react";
import { NavLink } from "react-router-dom";
import { Nav, NavItem } from "reactstrap";
import '../../assets/styles/black-dashboard-react.css';  // Ensure this path is correct
import '../../assets/styles/nucleo-icons.css';  // Ensure this path is correct
import './Sidebar.css';  // Custom sidebar styles

function Sidebar() {
  const routes = [
    { path: "/dashboard", name: "Dashboard", icon: "tim-icons icon-chart-pie-36" },
    { path: "/products", name: "Products List", icon: "tim-icons icon-bullet-list-67" },
    { path: "/user-management", name: "User Management", icon: "tim-icons icon-single-02" },
    { path: "/tattoo-artist-management", name: "Tattoo Artist Management", icon: "tim-icons icon-badge" },
    { path: "/appointment-management", name: "Appointment Management", icon: "tim-icons icon-calendar-60" },
    { path: "/promotions", name: "Promotions", icon: "tim-icons icon-gift-2" },
    { path: "/events", name: "Events", icon: "tim-icons icon-sound-wave" },
    { path: "/financial-reports", name: "Financial Reports", icon: "tim-icons icon-bank" },
    { path: "/equipment-management", name: "Equipment Management", icon: "tim-icons icon-settings" },
    { path: "/loyalty-program", name: "Loyalty Program", icon: "tim-icons icon-trophy" },
  ];

  return (
    <div className="sidebar" data-color="blue">
      <div className="logo">
        <a href="https://www.creative-tim.com" className="simple-text logo-mini">
          CT
        </a>
        <a href="https://www.creative-tim.com" className="simple-text logo-normal">
          Creative Tim
        </a>
      </div>
      <div className="sidebar-wrapper">
        <Nav>
          {routes.map((prop, key) => (
            <NavItem key={key}>
              <NavLink
                exact
                to={prop.path}
                className="nav-link"
                activeClassName="active"
              >
                <i className={prop.icon} />
                <p>{prop.name}</p>
              </NavLink>
            </NavItem>
          ))}
        </Nav>
      </div>
    </div>
  );
}

export default Sidebar;
