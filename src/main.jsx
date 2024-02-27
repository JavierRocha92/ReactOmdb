import ReactDOM from "react-dom/client";
import "./index.css";

import { Route, Routes, BrowserRouter } from "react-router-dom";
import { Layout } from "./components/Layout";
import { Home } from "./components/Home";
import { FilmDetail } from "./components/FilmDetail";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
      </Route>
      <Route path="/id/:id" element={<FilmDetail />} />
    </Routes>
  </BrowserRouter>
);
