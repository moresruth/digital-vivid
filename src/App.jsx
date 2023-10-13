import React from "react";
import { Navbar, Stats } from "./components";
import { Home } from "./container";

function App() {
  return (
    <div className=" w-full overflow-hidden">
      <Navbar />
      <Home />
      <Stats />
    </div>
  );
}

export default App;
