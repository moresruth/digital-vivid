import React from "react";
import { Navbar, Stats } from "./components";
import { About, Collection, Home, HowItWorks } from "./container";

function App() {
  return (
    <div className=" w-full overflow-hidden">
      <Navbar />
      <Home />
      <Stats />
      <Collection />
      <About />
      <HowItWorks />
    </div>
  );
}

export default App;
