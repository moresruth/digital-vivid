import React from "react";
import { Navbar, Stats } from "./components";
import { Collection, Home } from "./container";

function App() {
  return (
    <div className=" w-full overflow-hidden">
      <Navbar />
      <Home />
      <Stats />
      <Collection />
    </div>
  );
}

export default App;
