import React from "react";
import { Navbar, Newsletter, Stats } from "./components";
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
      <Newsletter />
    </div>
  );
}

export default App;
