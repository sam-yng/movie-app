import React from "react";
import classNames from "classnames";
import cat from "../assets/perchita_full.webp";

// interface NowPlaying {
//   original_title: string;
//   overview: string;
//   id: number;
// }

export const LandingPage: React.FC = () => {
  // const [response, setResponse] = useState<NowPlaying[]>([]);

  // useEffect(() => {
  //   fetch("http://localhost:8000/nowplaying")
  //     .then((res) => res.json())
  //     .then((data) => setResponse(data.results));
  // }, []);

  return (
    <section
      className={classNames("flex", "flex-col", "justify-center", "h-5/6")}
    >
      <img
        className={classNames("h-auto", "w-72", "mt-6", "mx-auto")}
        src={cat}
      />
      <h1 className={classNames("text-3xl", "mx-auto")}>Movie App Beta</h1>
      {/* {response.map((item: NowPlaying) => {
        return <h1 key={item.id}>{item.original_title}</h1>;
      })} */}
    </section>
  );
};
