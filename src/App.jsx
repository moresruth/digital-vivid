import React from "react";
import { Navbar, Stats } from "./components";
import { About, Collection, Home, HowItWorks, TopCreator } from "./container";

function App() {
  return (
    <div className=" w-full overflow-hidden">
      <Navbar />
      <Home />
      <Stats />
      <Collection />
      <About />
      <HowItWorks />
      <TopCreator />
    </div>
  );
}

export default App;
