import React from "react";
import Home from "./components/Home/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Cronograma from "./components/Cronograma/Cronograma";
import Download from "./components/Download/Download";

// import { createBrowserHistory } from "history";

function App() {
  // const  history = createBrowserHistory();
  return (
    <BrowserRouter>
      <Routes /*  history={history} */>
        <Route path="/home" element={<Home />} />
        <Route path="/cronograma" element={<Cronograma />} />
        <Route path="/" element={<Download />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
