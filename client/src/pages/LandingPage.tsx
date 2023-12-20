import React from "react";
import classNames from "classnames";
import cat from "../assets/perchita_full.webp";

export const LandingPage: React.FC = () => {
  return (
    <section
      className={classNames("flex", "flex-col", "justify-center", "h-5/6")}
    >
      <img
        className={classNames("h-auto", "w-72", "mt-6", "mx-auto")}
        src={cat}
      />
      <h1 className={classNames("text-3xl", "mx-auto")}>Movie App Beta</h1>
    </section>
  );
};
