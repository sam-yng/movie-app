import React, { useState, useEffect } from "react";
import classNames from "classnames";
import { MovieItem } from "../components/MovieItem";

interface MovieNowPlaying {
  original_title: string;
  overview: string;
  id: number;
  poster_path: string;
}

export const NowPlaying: React.FC = () => {
  const [response, setResponse] = useState<MovieNowPlaying[]>([]);

  useEffect(() => {
    fetch("http://localhost:8000/nowplaying")
      .then((res) => res.json())
      .then((data) => setResponse(data.results));
  }, []);

  return (
    <div className={classNames("grid", "grid-cols-3")}>
      {response.map((item: MovieNowPlaying) => {
        return (
          <MovieItem
            key={item.id}
            poster={`https://image.tmdb.org/t/p/original${item.poster_path}`}
            title={item.original_title}
          />
        );
      })}
    </div>
  );
};
