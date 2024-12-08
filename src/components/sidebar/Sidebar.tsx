import "./Sidebar.css";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaWallet, FaGift, FaRobot, FaErlang } from "react-icons/fa";
import {
  Squares2X2Icon,
  ChartBarIcon,
  HomeIcon,
  SunIcon,
  MoonIcon,
} from "@heroicons/react/24/outline";
import { Tooltip } from "react-tooltip";
import classNames from "classnames";

interface SidebarBarProps {
  theme: string;
  updateTheme: (theme: string) => void;
  activeIndex: number;
  updateActiveIndex: (activeIndex: number) => void;
}

const Sidebar: React.FC<SidebarBarProps> = ({
  theme,
  updateTheme,
  activeIndex,
  updateActiveIndex,
}) => {
  const [isCollapsed, setIsCollapsed] = useState(true);
  const navigate = useNavigate();

  const handleCollapseToggle = () => {
    setIsCollapsed(!isCollapsed);
  };

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    updateTheme(newTheme);
    document.documentElement.classList.remove("dark", "light");
    document.documentElement.classList.add(newTheme);
    localStorage.setItem("theme", newTheme);

    // Set background color based on the theme
    if (newTheme === "dark") {
      document.body.style.backgroundColor = "#000000"; // Extreme black
    } else {
      document.body.style.backgroundColor = "#ffffff"; // Extreme white
    }
  };

  const menuItems = [
    { icon: <HomeIcon className="size-5" />, tooltip: "Home" },
    { icon: <FaErlang className="size-5" />, tooltip: "apps" },
    { icon: <FaRobot className="size-5" />, tooltip: "leaderboard" },
    { icon: <FaRobot size="20" />, tooltip: "wallet" },
  ];

  return (
    <div
      className={classNames(
        "h-screen flex flex-col justify-between text-white shadow-lg border-r border-r-neutral-700 transition-all duration-300",
        {
          "w-20 bg-black": isCollapsed && theme === "dark",
          "w-40 bg-black": !isCollapsed && theme === "dark",
          "w-20 bg-gray-900": isCollapsed && theme === "light",
          "w-40 bg-gray-900": !isCollapsed && theme === "light",
        }
      )}
    >
      <div>
        <div className="pt-4 pb-4 pl-3 pr-3 flex items-center justify-center">
          <img className="logo" src="Aco-logo.svg" alt="ACO logo" />
        </div>
        <div className="flex-grow flex flex-col items-center space-y-2">
          {menuItems.map((item, index) => (
            <SidebarIcon
              key={index}
              icon={item.icon}
              tooltip={item.tooltip}
              isActive={index === activeIndex}
              isCollapsed={isCollapsed}
              theme={theme}
              onClick={() => {
                updateActiveIndex(index);
                localStorage.setItem("activeIndex", index.toString());
                navigate(
                  item.tooltip === "Home" ? "/" : item.tooltip.toLowerCase()
                );
              }}
            />
          ))}
        </div>
      </div>
      <div>
        <div className="p-5 flex items-center justify-center">
          {/* Add lightmode dark mode toggle switch */}
          <button
            onClick={toggleTheme}
            className="flex items-center justify-center p-2 bg-neutral-700 text-white rounded-full transition-colors duration-300"
          >
            {theme === "dark" ? (
              <SunIcon className="size-5" />
            ) : (
              <MoonIcon className="size-5" />
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

interface SidebarIconProps {
  icon: JSX.Element;
  tooltip: string;
  isActive: boolean;
  isCollapsed: boolean;
  theme: string;
  onClick: () => void;
}

const SidebarIcon: React.FC<SidebarIconProps> = ({
  icon,
  tooltip,
  isActive,
  isCollapsed,
  theme,
  onClick,
}) => (
  <div
    onClick={onClick}
    className={classNames(
      "sidebar-icon group relative flex items-center justify-center rounded-lg w-full p-3 transition-colors duration-300 cursor-pointer",
      {
        "bg-neutral-700": isActive && theme === "dark",
        "bg-neutral-500": isActive && theme === "light",
        "hover:bg-neutral-700": !isActive && theme === "dark",
        "hover:bg-neutral-500": !isActive && theme === "light",
      }
    )}
    data-tooltip-id={tooltip}
    data-tooltip-content={tooltip}
  >
    {icon}
    {!isCollapsed && <span className="ml-4">{tooltip}</span>}
    <Tooltip id={tooltip} place="right" variant="dark" className="solid" />
  </div>
);

export default Sidebar;
