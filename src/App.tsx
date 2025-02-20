import { useEffect, useRef, useState } from "react";

import "./App.scss";
import { useLenisScroll } from "./hooks/useLenisScroll";
import Home from "./components/home/Home";
import TopBar from "./components/topbar/TopBar";

function App() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    useLenisScroll();
  }, []);

  return (
    <div className="main-container">
      <TopBar />
      <Home />
    </div>
  );
}

export default App;
