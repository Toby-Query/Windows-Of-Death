import React, { useState, ReactNode } from "react";
import {
  FaTh,
  FaBars,
  FaUserAlt,
  FaRegChartBar,
  FaCommentAlt,
  FaShoppingBag,
  FaThList,
} from "react-icons/fa";
import { NavLink } from "react-router-dom";

interface MenuItem {
  path: string;
  name: string;
  icon: ReactNode;
}

interface SidebarProps {
  children: ReactNode;
}

const Sidebar: React.FC<SidebarProps> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  const menuItem: MenuItem[] = [
    {
      path: "/",
      name: "Chapter",
      icon: "1st",
    },
    {
      path: "/Ch2",
      name: "Chapter",
      icon: "2nd",
    },
    {
      path: "/Ch3",
      name: "Chapter",
      icon: "3rd",
    },
    {
      path: "/Ch4",
      name: "Comment",
      icon: <FaCommentAlt />,
    },
    {
      path: "/Ch5",
      name: "Product",
      icon: <FaShoppingBag />,
    },
    {
      path: "/productList",
      name: "Product List",
      icon: <FaThList />,
    },
  ];

  return (
    <div className="container">
      <div style={{ width: isOpen ? "200px" : "50px" }} className="sidebar">
        <div className="top_section">
          <h1 style={{ display: isOpen ? "block" : "none" }} className="logo">
            Logo
          </h1>
          <div style={{ marginLeft: isOpen ? "50px" : "0px" }} className="bars">
            <FaBars onClick={toggle} />
          </div>
        </div>
        {menuItem.map((item, index) => (
          <NavLink
            to={item.path}
            key={index}
            className={({ isActive }) => "link" + (isActive ? " active" : "")}
          >
            <div className="icon">{item.icon}</div>
            <div
              style={{ display: isOpen ? "block" : "none" }}
              className="link_text"
            >
              {item.name}
            </div>
          </NavLink>
        ))}
      </div>
      <main>{children}</main>
    </div>
  );
};

export default Sidebar;
