import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { LandingPage } from "./pages/LandingPage";
import "./index.css";
import { Nav } from "./components/Nav";
import classNames from "classnames";

const App: React.FC = () => {
  // const [message, setMessage] = useState<string>("");

  // useEffect(() => {
  //   fetch("http://localhost:8000/message")
  //     .then((res) => res.json())
  //     .then((data) => setMessage(data.message));
  // }, []);

  return (
    <Router>
      <main className={classNames("mx-12", "py-4", "h-screen")}>
        <Nav />
        <Routes>
          <Route path="/" element={<LandingPage />} />
        </Routes>
      </main>
    </Router>
  );
};

export default App;
