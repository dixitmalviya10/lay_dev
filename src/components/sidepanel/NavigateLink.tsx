import React from "react";
import { NavLink } from "react-router";
import { TNavigateLink } from "../../types";

const NavigateLink: React.FC<TNavigateLink> = ({ children, navTo }) => {
  return (
    <NavLink
      style={({ isActive }) => ({
        color: isActive ? "black" : "gray",
        fontWeight: isActive ? "600" : "",
        background: isActive ? "#E0E0E0" : "",
      })}
      to={navTo}
      className="flex align-items-center gap-2 p-3 border-round-md hover:bg-black-alpha-10">
      {children}
    </NavLink>
  );
};

export default NavigateLink;
