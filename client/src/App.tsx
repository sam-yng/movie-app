import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { LandingPage } from "./pages/LandingPage";
import "./index.css";
import { Nav } from "./components/Nav";
import classNames from "classnames";
import { NowPlaying } from "./pages/NowPlaying";

const App: React.FC = () => {
  return (
    <Router>
      <main className={classNames("mx-12", "py-4", "h-screen")}>
        <Nav />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="nowplaying" element={<NowPlaying />} />
        </Routes>
      </main>
    </Router>
  );
};

export default App;
