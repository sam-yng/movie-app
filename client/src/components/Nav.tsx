import React from "react";
import classNames from "classnames";
import { Link } from "react-router-dom";

export const Nav: React.FC = () => {
  return (
    <nav className={classNames("flex", "flex-row", "justify-center")}>
      <div className={classNames("text-xl", "space-x-10")}>
        <Link to="/">Now Playing</Link>
        <Link to="/">Popular</Link>
        <Link to="/">Top Rated</Link>
        <Link to="/">Upcoming</Link>
      </div>
    </nav>
  );
};
