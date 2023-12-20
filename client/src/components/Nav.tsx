import React from "react";
import classNames from "classnames";
import { NavLink } from "../components/NavLink";

export const Nav: React.FC = () => {
  return (
    <nav className={classNames("flex", "flex-row", "justify-center")}>
      <div className={classNames("text-xl", "space-x-10")}>
        <NavLink route="/nowplaying" text="Now Playing" />
        <NavLink route="/popular" text="Popular" />
        <NavLink route="/toprated" text="Top Rated" />
        <NavLink route="/upcoming" text="Upcoming" />
      </div>
    </nav>
  );
};
