import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Components/Home/Home";
import Search from "./Components/Search/Search";
import Support from "./Components/Support/Support";
import Info from "./Components/Info/Info";
import Travelers from "./Components/Travelers/Travelers";
import Footer from "./Components/Footer/Footer";
import Subscribers from "./Components/Subscribers/Subscribers";
import Lounge from "./Components/Lounge/Lounge";

const App = () => {
  return (
    <div>
      <Navbar />
      <Home />
      <Search />
      <Support />
      <Info />
      <Lounge />
      <Travelers />
      <Subscribers />
      <Footer/> 
    </div>
  );
};

export default App;
