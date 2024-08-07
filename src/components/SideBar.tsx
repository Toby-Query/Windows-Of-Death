import React, { useState, ReactNode } from "react";
import {
  // FaTh,
  FaBars,
  // FaUserAlt,
  // FaRegChartBar,
  FaCommentAlt,
  // FaShoppingBag,
  // FaThList,
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
      path: "/Windows-Of-Death/",
      name: "Chapter",
      icon: "1st",
    },
    {
      path: "/Windows-Of-Death/Ch2",
      name: "Chapter",
      icon: "2nd",
    },
    {
      path: "/Windows-Of-Death/Ch3",
      name: "Chapter",
      icon: "3rd",
    },
    {
      path: "/Windows-Of-Death/Ch4",
      name: "Chapter",
      icon: "4th",
    },
    {
      path: "/Windows-Of-Death/Ch5",
      name: "Chapter",
      icon: "5th",
    },
    {
      path: "/Windows-Of-Death/Ch6",
      name: "Chapter",
      icon: "6th",
    },
    {
      path: "/Windows-Of-Death/Comments",
      name: "Comment",
      icon: <FaCommentAlt />,
    },
  ];

  return (
    <div className="container">
      <div style={{ width: isOpen ? "200px" : "50px" }} className="sidebar">
        <div className="top_section">
          <h1 style={{ display: isOpen ? "block" : "none" }} className="logo">
            W.o.D
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
            end={item.path === "/Windows-Of-Death/"}
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
