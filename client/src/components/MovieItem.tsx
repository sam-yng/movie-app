import React from "react";
import classNames from "classnames";

type MovieItemProps = {
  title: string;
  poster: string;
  key: number;
};

export const MovieItem: React.FC<MovieItemProps> = ({ title, poster }) => {
  return (
    <article
      className={classNames(
        "flex",
        "flex-col",
        "justify-center",
        "items-center",
      )}
    >
      <img className={classNames("h-48")} src={poster} loading="lazy" />
      <h1>{title}</h1>
    </article>
  );
};
