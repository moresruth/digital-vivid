import React from "react";
import { Navbar, Stats } from "./components";
import { About, Collection, Home } from "./container";

function App() {
  return (
    <div className=" w-full overflow-hidden">
      <Navbar />
      <Home />
      <Stats />
      <Collection />
      <About />
    </div>
  );
}

export default App;
