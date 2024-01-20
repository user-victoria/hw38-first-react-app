import React from "react";
import Header from "./components/header.js";
import Leftsidebar from "./components/leftsidebar.js";
import Maincontainer from "./components/maincontainer.js";

function App() {
  return (
    <div className="App">
      <Header />
      <Leftsidebar />
      <Maincontainer />
    </div>
  );
}

export default App;