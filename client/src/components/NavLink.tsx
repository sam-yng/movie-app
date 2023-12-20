import React from "react";
import { Link, useLocation } from "react-router-dom";

type NavLinkProps = {
  route: string;
  text: string;
};

export const NavLink: React.FC<NavLinkProps> = ({ route, text }) => {
  const { pathname } = useLocation();
  const locationIsRoute = pathname === route;

  return (
    <Link to={locationIsRoute ? "/" : route}>
      {locationIsRoute ? "Home" : text}
    </Link>
  );
};
